'use client';

import { INewProduct, IProduct, IProductForm } from '@types';
import styles from './CreateEditProduct.module.scss';
import { Control, useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import CreateEditDeleteAction from '../../atoms/CreateEditDeleteAction/CreateEditDeleteAction';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createProduct, deleteProduct, updateProduct } from '@lib/products';
import { enqueueSnackbar } from 'notistack';
import { errorNotification } from '@utils/notifications';
import { convertToFormData } from '@utils/utils';
import FormRow from '@components/system/FormRow/FormRow';
import FilePreview from '@components/admin/atoms/FilePreview/FilePreview';
import Select from '@components/system/Select/Select';
import { Checkbox } from '@mui/material';
import DeletedNotice from '@components/admin/atoms/DeletedNotice';

const CreateEditProduct: React.FC<{ product?: IProduct }> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isDigitalProduct, setIsDigitalProduct] = useState<boolean>(!!product?.document);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<IProductForm>({
    defaultValues: {
      visible: true,
      category: 'Medical Equipment',
    },
    disabled: product?.deleted,
  });

  const handleCreateProduct = async (data: IProductForm) => {
    setLoading(true);
    const newProduct: INewProduct = {
      ...data,
      deleted: false,
      thumbnail: data['thumbnail'][0],
      images: data?.images ? Array.from(data['images']) : undefined,
      document: isDigitalProduct ? data['document'][0] : undefined,
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

  const handleUpdateProduct = async (data: IProductForm) => {
    setLoading(true);
    const newProduct: INewProduct = {
      ...data,
      deleted: false,
      thumbnail: data.thumbnail ? data['thumbnail'][0] : undefined,
      document: data.document ? data['document'][0] : undefined,
      images: (data?.images && data?.images.length > 0) ? Array.from(data['images']) : undefined,
    };

    const newProductFormData = convertToFormData(newProduct);

    try {
      await updateProduct(product.id, newProductFormData);
      enqueueSnackbar('Product updated');
    } catch (e) {
      console.error(e);
      errorNotification('Error updating Product', e);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImages = async () => {
    setLoading(true);
    try {
      await updateProduct(product.id, { images: null }, false);
      enqueueSnackbar('Product updated');
    } catch (e) {
      console.error(e);
      errorNotification('Error updating Product', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.CreateEditProduct}>
      {product?.deleted
        ? <DeletedNotice />
        : (
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
        )}
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
          <Select
            control={control as unknown as Control}
            label='Category'
            name='category'
            options={[{
              value: 'Medical Equipment',
              label: 'Medical Equipment',
            }, {
              value: 'Clothing & Gear',
              label: 'Clothing & Gear',
            }, {
              value: 'Guidance Documents',
              label: 'Guidance Documents',
            }]}
            register={{ ...register('category', { required: true, value: product?.category }) }}
          />
          <Select
            control={control as unknown as Control}
            label='Visible'
            name='visible'
            options={[{
              value: 'true',
              label: 'True',
            }, {
              value: 'false',
              label: 'False',
            }]}
            register={{ ...register('visible', { required: true, value: product?.visible }) }}
          />
        </FormRow>
        <FormRow>
          <FilePreview
            type='image'
            file={product?.thumbnail}
            inputProps={{
              label: 'Thumbnail',
              name: 'thumbnail',
              required: true,
              inputProps: {
                type: 'file',
                accept: 'image/*',
              },
              register,
              error: errors.thumbnail?.type === 'required' ? 'Thumbnail is required' : undefined
            }}
          />
          <FilePreview
            type='images'
            files={product?.images}
            customRemove={handleRemoveImages}
            inputProps={{
              label: 'Images',
              name: 'images',
              inputProps: {
                type: 'file',
                multiple: true,
              },
              register,
            }}
          />
        </FormRow>
        <div className={styles.row}>
          <Checkbox checked={isDigitalProduct} onChange={(e) => setIsDigitalProduct(e.target.checked)} />
          <label htmlFor="dates">This is a Digital Product</label>
        </div>
        {isDigitalProduct && (
          <FilePreview
            type='document'
            file={product?.document}
            inputProps={{
              label: 'Document',
              name: 'document',
              required: true,
              inputProps: {
                type: 'file',
                accept: 'application/pdf'
              },
              register,
              error: errors.document?.type === 'required' ? 'Document is required' : undefined
            }}
          />
        )}
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditProduct;
