'use client';

import { ICourse, ICourseDate, INewCourse } from '@types';
import styles from './CreateEditCourse.module.scss';
import { Control, useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../atoms/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createCourse, deleteCourse, updateCourse } from '@lib/courses';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import FormRow from '@components/system/FormRow/FormRow';
import Select from '@components/system/Select/Select';
import CourseDates from './CourseDates/CourseDates';
import DeletedNotice from '@components/admin/atoms/DeletedNotice';

const CreateEditCourse: React.FC<{ course?: ICourse }> = ({ course }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue
  } = useForm<INewCourse>({
    defaultValues: {
      category: 'Online Distance Learning (ODL)',
    },
    disabled: course?.deleted,
  });

  const handleCreateCourse = async (data: INewCourse) => {
    setLoading(true);
    try {
      await createCourse(data);
      enqueueSnackbar('Course created');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error creating Course', e);
    } finally {
      setLoading(false);
    }
  };
  const handleUpdateCourse = async (data: INewCourse) => {
    setLoading(true);
    try {
      await updateCourse(course.id, data);
      enqueueSnackbar('Course updated');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error updating Course', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.CreateEditCourse}>
      {course?.deleted
        ? <DeletedNotice />
        : <CreateEditDeleteAction
          actionText={!course ? 'Create' : 'Update'}
          actionOnClick={!course ? handleSubmit(handleCreateCourse) : handleSubmit(handleUpdateCourse)}
          delete={course
            ? {
              deleteOnClick: () => deleteCourse(course.id),
              text: 'Are you sure you want to delete this course?'
            }
            : undefined}
        />}
      <form action="">
        <Input
          label='Name'
          name="name"
          inputProps={{
            type: 'text',
          }}
          register={{ ...register('name', { required: true, value: course?.name }) }}
          error={errors.name?.type === 'required' ? 'Name is required' : undefined}
        />
        <TextArea
          label='Description'
          name="description"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('description', { required: true, value: course?.description }) }}
          error={errors.description?.type === 'required' ? 'description is required' : undefined}
        />
        <FormRow>
          <Input
            label='Price'
            name="price"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('price', { required: true, value: course?.price }) }}
            error={errors.price?.type === 'required' ? 'Price is required' : undefined}
          />
          <Input
            label='Code'
            name="code"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('code', { required: true, value: course?.code }) }}
            error={errors.code?.type === 'required' ? 'Code is required' : undefined}
          />
        </FormRow>
        <Select
          control={control as unknown as Control}
          label='Category'
          name='category'
          options={[{
            value: 'Online Distance Learning (ODL)',
            label: 'Online Distance Learning (ODL)',
          }, {
            value: 'Blended learning: Online Theory + on-site skills development and assessment',
            label: 'Blended learning: Online Theory + on-site skills development and assessment',
          }]}
          register={{ ...register('category', { required: true, value: course?.category }) }}
          error={errors.category?.type === 'required' ? 'Category is required' : undefined}
        />
        <CourseDates
          setFormDates={(dates: ICourseDate[]) => setValue('dates', dates)}
          dates={course?.dates}
          disabled={course?.deleted}
        />
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditCourse;
