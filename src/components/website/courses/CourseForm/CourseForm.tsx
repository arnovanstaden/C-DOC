'use client';

import React, { useEffect, useState } from 'react';
import Button from '@components/system/Button/Button';
import styles from './CourseForm.module.scss';
import { IBookingForm, ICoupon, ICourse, ICourseDate, INewBooking } from '@types';
import BookingForm from '../BookingForm/BookingForm';
import Course from '../Course/Course';
import Section from '@components/website/layout/Section/Section';
import { useForm } from 'react-hook-form';
import Loader from '@components/system/Loader';
import { createBooking } from '@lib/bookings';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';
import { BaseSelect } from '@components/system/Select/Select';

const CourseForm: React.FC<{ courses: ICourse[] }> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<ICourse>();
  const [selectedCourseDates, setSelectedCourseDates] = useState<ICourseDate>();
  const [coupon, setCoupon] = useState<ICoupon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IBookingForm>();

  let total = selectedCourse?.price || 0;

  if (coupon) {
    total = total - (total * coupon.discount) / 100;
  }

  const selectedCourseAvailableDates: ICourseDate[] | boolean = selectedCourse?.dates && selectedCourse?.dates.length > 0 && (
    selectedCourse.dates
      .filter((date) => new Date(date.from) >= new Date())
  ) || false;
  const allDetailsReady = selectedCourse && (!selectedCourseAvailableDates || selectedCourseDates);

  useEffect(() => {
    if (!selectedCourse) return;

    const bookingFormElement = document.getElementById('BookingForm');
    const courseDatesElement = document.getElementById('CourseDates');

    if (courseDatesElement) {
      courseDatesElement.scrollIntoView({ behavior: 'smooth' });
      setSelectedCourseDates(selectedCourseAvailableDates[0]);
      return;
    }

    if (bookingFormElement) {
      bookingFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCourse]);


  const submitBooking = async (data) => {
    if (!allDetailsReady) return;


    const newBooking: INewBooking = {
      ...data,
      total,
      proofOfPayment: data['proofOfPayment'][0],
      courseId: selectedCourse.id,
      courseDates: JSON.stringify(selectedCourseDates),
    };

    const newArticleFormData = convertToFormData(newBooking);

    setLoading(true);
    try {
      await createBooking(newArticleFormData);
      enqueueSnackbar('Course Booking Successful. You\'ll receive an email with your confirmation. Thank you!');
      reset();
      setSelectedCourse(undefined);
      setSelectedCourseDates(undefined);
    } catch (e) {
      console.error(e);
      errorNotification('Error creating Booking', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitBooking)} className={styles.CourseForm}>
        <Section
          heading="Select a Course"
        >
          <div className={styles.courseList}>
            {selectedCourse
              ? <Course
                course={courses.find((course) => course.id === selectedCourse.id)}
                selectCourse={setSelectedCourse}
                selected={true}
              />
              : courses.map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  selectCourse={setSelectedCourse}
                  selected={selectedCourse?.id === course.id}
                />
              ))}
          </div>
        </Section>

        {selectedCourseAvailableDates && (
          <Section
            heading="Select Course Date"
            idProp='CourseDates'
          >
            <div className={styles.courseDates}>
              <BaseSelect
                className={styles.select}
                label='Date'
                options={selectedCourseAvailableDates.map((date) => ({
                  value: JSON.stringify(date),
                  label: `${date.from.toLocaleString().substring(0, 10)} - ${date.to.toLocaleString().substring(0, 10)}`,
                }))}
                onChange={(newValue) => setSelectedCourseDates(JSON.parse(newValue))}
                defaultValue={JSON.stringify(selectedCourseAvailableDates[0])}
              />
            </div>
          </Section>
        )}

        {allDetailsReady && (
          <Section
            heading="Your Booking Details"
            className={styles.CourseForm}
            idProp='BookingForm'
          >
            <BookingForm register={register} errors={errors} total={total} watch={watch} setCoupon={setCoupon} />
            <div className={styles.submitButton}>
              <Button className="button" type="submit" >
                Submit Booking
              </Button>
            </div>
          </Section>
        )}

      </form>
      <Loader open={loading} />
    </>
  );
};

export default CourseForm;
