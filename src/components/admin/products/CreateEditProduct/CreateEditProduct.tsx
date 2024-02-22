'use client';

import { IProduct } from '@types';
import styles from './CreateEditProduct.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../atoms/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createProduct, deleteProduct } from '@lib/products';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';
import FormRow from '@components/admin/atoms/FormRow/FormRow';

interface IProductForm extends Omit<IProduct, 'image' | 'file'> {
  file: FileList;
  image: FileList;
}

interface INewProduct extends Omit<IProduct, 'image' | 'file'> {
  file: File;
  image: File;
}


const CreateEditProduct: React.FC<{ product?: IProduct }> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IProductForm>();

  const handleCreateProduct = async (data: IProductForm) => {
    setLoading(true);
    const newProduct: INewProduct = {
      ...data,
      image: data['image'][0],
      file: data['file'][0],
    };

    const newProductFormData = convertToFormData(newProduct);

    try {
      await createProduct(newProductFormData);
      enqueueSnackbar('Product created');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error creating Product', e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = async () => {
    setLoading(false);
    reset();
  };

  return (
    <div className={styles.CreateEditProduct}>
      <CreateEditDeleteAction
        actionText={!product ? 'Create' : 'Update'}
        actionOnClick={!product ? handleSubmit(handleCreateProduct) : handleSubmit(handleUpdateProduct)}
        delete={product
          ? {
            deleteOnClick: () => deleteProduct(product.id),
            text: 'Are you sure you want to delete this product?'
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
          register={{ ...register('name', { required: true, value: product?.name }) }}
          error={errors.name?.type === 'required' ? 'Name is required' : undefined}
        />
        <TextArea
          label='Description'
          name="description"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('description', { required: true, value: product?.description }) }}
          error={errors.description?.type === 'required' ? 'description is required' : undefined}
        />
        <FormRow>
          <Input
            label='Price'
            name="price"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('price', { required: true, value: product?.price }) }}
            error={errors.price?.type === 'required' ? 'Price is required' : undefined}
          />
          <Input
            label='Code'
            name="code"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('code', { required: true, value: product?.code }) }}
            error={errors.code?.type === 'required' ? 'Code is required' : undefined}
          />
        </FormRow>
        <FormRow>
          category
          visibility
        </FormRow>
        <Input
          label='Thumbnail'
          name="thumbnail"
          inputProps={{
            type: 'file',
          }}
          register={{ ...register('thumbnail', { required: true }) }}
          error={errors.thumbnail?.type === 'required' ? 'Thumbnail is required' : undefined}
        />
        <Input
          label='File'
          name="images"
          inputProps={{
            type: 'images',
            multiple: true,
          }}
          register={{ ...register('images', { required: true }) }}
          error={errors.images?.type === 'required' ? 'images is required' : undefined}
        />
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditProduct;
