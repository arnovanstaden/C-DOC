'use client';

import React from 'react';
import Button from '@components/system/Button/Button';
import styles from './CourseForm.module.scss';
import { IBooking, ICourse } from '@types';
import BookingForm from '../BookingForm/BookingForm';
import Course from '../Course/Course';
import Section from '@components/website/layout/Section/Section';
import { useForm } from 'react-hook-form';

const CourseForm: React.FC<{ courses: ICourse[] }> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = React.useState<ICourse>(courses[0]);

  const {
    register,
    // handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<IBooking>();

  return (
    <form action="">
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
        >
          <BookingForm register={register} errors={errors} />
          <Button outlined className="button" type="submit" >
            Submit Booking
          </Button>
        </Section>
      )}
    </form>

  );
};

export default CourseForm;
