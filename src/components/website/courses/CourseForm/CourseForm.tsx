'use client';

import React, { useEffect, useState } from 'react';
import Button from '@components/system/Button/Button';
import styles from './CourseForm.module.scss';
import { IBookingForm, ICoupon, ICourse, INewBooking } from '@types';
import BookingForm from '../BookingForm/BookingForm';
import Course from '../Course/Course';
import Section from '@components/website/layout/Section/Section';
import { useForm } from 'react-hook-form';
import Loader from '@components/system/Loader';
import { createBooking } from '@lib/bookings';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';

const CourseForm: React.FC<{ courses: ICourse[] }> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<ICourse>(courses[0]);
  const [coupon, setCoupon] = useState<ICoupon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IBookingForm>();

  useEffect(() => {
    const bookingFormElement = document.getElementById('BookingForm');
    if (bookingFormElement) {
      bookingFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCourse]);

  let total = selectedCourse?.price || 0;
  if (coupon) {
    total = total - (total * coupon.discount) / 100;
  }

  const submitBooking = async (data) => {
    setLoading(true);
    const newBooking: INewBooking = {
      ...data,
      total,
      proofOfPayment: data['proofOfPayment'][0],
    };

    const newArticleFormData = convertToFormData(newBooking);

    try {
      await createBooking(newArticleFormData);
      enqueueSnackbar('Course Booking Successful. You\'ll receive an email with your confirmation. Thank you!');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error creating Booking', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitBooking)}>
        <Section
          heading="Select a Course"
          className={styles.CourseForm}
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
        {selectedCourse && (
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
