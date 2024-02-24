'use client';

import { IArticle } from '@types';
import styles from './CreateEditArticle.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../atoms/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createArticle, deleteArticle } from '@lib/articles';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';
import FormRow from '@components/admin/atoms/FormRow/FormRow';

interface IArticleForm extends Omit<IArticle, 'image' | 'file'> {
  file: FileList;
  image: FileList;
}

interface INewArticle extends Omit<IArticle, 'image' | 'file'> {
  file: File;
  image: File;
}


const CreateEditArticle: React.FC<{ article?: IArticle }> = ({ article }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IArticleForm>();

  const handleCreateArticle = async (data: IArticleForm) => {
    setLoading(true);
    const newArticle: INewArticle = {
      ...data,
      image: data['image'][0],
      file: data['file'][0],
    };

    const newArticleFormData = convertToFormData(newArticle);

    try {
      await createArticle(newArticleFormData);
      enqueueSnackbar('Article created');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error creating Article', e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateArticle = async () => {
    setLoading(false);
    reset();
  };

  return (
    <div className={styles.CreateEditArticle}>
      <CreateEditDeleteAction
        actionText={!article ? 'Create' : 'Update'}
        actionOnClick={!article ? handleSubmit(handleCreateArticle) : handleSubmit(handleUpdateArticle)}
        delete={article
          ? {
            deleteOnClick: () => deleteArticle(article.id),
            text: 'Are you sure you want to delete this article?'
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
          register={{ ...register('name', { required: true, value: article?.name }) }}
          error={errors.name?.type === 'required' ? 'Name is required' : undefined}
        />
        <TextArea
          label='Description'
          name="description"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('description', { required: true, value: article?.description }) }}
          error={errors.description?.type === 'required' ? 'description is required' : undefined}
        />
        <FormRow>
          <Input
            label='Author'
            name="author"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('author', { required: true, value: article?.author }) }}
            error={errors.author?.type === 'required' ? 'author is required' : undefined}
          />
          <Input
            label='Researcher'
            name="researcher"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('researcher', { required: true, value: article?.researcher }) }}
            error={errors.researcher?.type === 'required' ? 'researcher is required' : undefined}
          />
        </FormRow>
        <FormRow>
          <Input
            label='Image'
            name="image"
            inputProps={{
              type: 'file',
            }}
            register={{ ...register('image', { required: true }) }}
            error={errors.image?.type === 'required' ? 'image is required' : undefined}
          />
          <Input
            label='File'
            name="file"
            inputProps={{
              type: 'file',
            }}
            register={{ ...register('file', { required: true }) }}
            error={errors.file?.type === 'required' ? 'file is required' : undefined}
          />
        </FormRow>
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditArticle;
