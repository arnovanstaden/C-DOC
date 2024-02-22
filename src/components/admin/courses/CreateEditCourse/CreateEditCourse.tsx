'use client';

import { ICourse } from '@types';
import styles from './CreateEditCourse.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../layout/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createCourse, deleteCourse } from '@lib/courses';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import FormRow from '@components/admin/atoms/FormRow/FormRow';

const CreateEditCourse: React.FC<{ course?: ICourse }> = ({ course }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ICourse>();

  const handleCreateCourse = async (data: ICourse) => {
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

  const handleUpdateCourse = async () => {
    setLoading(false);
    reset();
  };

  return (
    <div className={styles.CreateEditCourse}>
      <CreateEditDeleteAction
        actionText={!course ? 'Create' : 'Update'}
        actionOnClick={!course ? handleSubmit(handleCreateCourse) : handleSubmit(handleUpdateCourse)}
        delete={course
          ? {
            deleteOnClick: () => deleteCourse(course.id),
            text: 'Are you sure you want to delete this course?'
          }
          : undefined}
      />
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
          {/* <Input
            label='Author'
            name="author"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('author', { required: true, value: course?.author }) }}
            error={errors.author?.type === 'required' ? 'author is required' : undefined}
          /> */}
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
            register={{ ...register('code', { required: true, value: course.code }) }}
            error={errors.code?.type === 'required' ? 'Code is required' : undefined}
          />
        </FormRow>
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditCourse;
