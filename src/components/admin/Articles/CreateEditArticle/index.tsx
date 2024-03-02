'use client';

import { IArticle, IArticleForm, INewArticle } from '@types';
import styles from './CreateEditArticle.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../atoms/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createArticle, deleteArticle, updateArticle } from '@lib/articles';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';
import FormRow from '@components/system/FormRow/FormRow';
import FilePreview from '@components/admin/atoms/FilePreview/FilePreview';

const CreateEditArticle: React.FC<{ article?: IArticle }> = ({ article }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IArticleForm>({
    defaultValues: {
      ...article,
      file: undefined,
      image: undefined,
    },
  });

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

  const handleUpdateArticle = async (data: IArticleForm) => {
    setLoading(true);

    const newArticle: INewArticle = {
      ...data,
      image: data.image ? data['image'][0] : undefined,
      file: data.file ? data['file'][0] : undefined,
    };

    const newArticleFormData = convertToFormData(newArticle);

    try {
      await updateArticle(article.id, newArticleFormData);
      enqueueSnackbar('Article updated');
    } catch (e) {
      console.error(e);
      errorNotification('Error updating Article', e);
    } finally {
      setLoading(false);
    }
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
          register={{ ...register('name', { required: true }) }}
          error={errors.name?.type === 'required' ? 'Name is required' : undefined}
        />
        <TextArea
          label='Description'
          name="description"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('description', { required: true }) }}
          error={errors.description?.type === 'required' ? 'Description is required' : undefined}
        />
        <FormRow>
          <Input
            label='Author'
            name="author"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('author', { required: true }) }}
            error={errors.author?.type === 'required' ? 'author is required' : undefined}
          />
          <Input
            label='Researcher'
            name="researcher"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('researcher', { required: true }) }}
            error={errors.researcher?.type === 'required' ? 'researcher is required' : undefined}
          />
        </FormRow>
        <FormRow>
          <FilePreview
            type='image'
            file={article?.image}
            inputProps={{
              label: 'Image',
              name: 'image',
              required: true,
              inputProps: {
                type: 'file',
                accept: 'image/*',
              },
              register,
              error: errors.image?.type === 'required' ? 'image is required' : undefined
            }}
          />
          <FilePreview
            type='document'
            file={article?.file}
            inputProps={{
              label: 'File',
              name: 'file',
              required: true,
              inputProps: {
                type: 'file',
                accept: 'application/pdf'
              },
              register,
              error: errors.file?.type === 'required' ? 'File is required' : undefined
            }}
          />
        </FormRow>
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditArticle;
