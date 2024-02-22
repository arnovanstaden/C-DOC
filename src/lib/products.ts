'use server';

import { IProduct } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getProduct = async (id: string): Promise<IProduct> => {
  await authPb();
  const result = await pb.collection('products').getOne(id);

  const product: IProduct = {
    ...result,
    thumbnail: pb.files.getUrl(result, result.thumbnail),
    images: result.images.map((image) => pb.files.getUrl(result, image))
  };

  return product;
};

export const getProducts = async (): Promise<IProduct[]> => {
  await authPb();
  const result = await pb.collection('products').getList();
  const products: IProduct[] = result.items.map((product) => ({
    ...product,
    thumbnail: pb.files.getUrl(product, product.thumbnail),
    images: product.images.map((image) => pb.files.getUrl(result, image))
  }));

  return products;
};

export const createProduct = async (product: FormData): Promise<void> => {
  await authPb();
  await pb.collection('products').create(product);
  revalidatePath('/admin/products');
  revalidatePath('/products');
  redirect('/admin/products');
};

export const updateProduct = async (product: FormData): Promise<void> => {
  await authPb();
  await pb.collection('products').update('', product);
  revalidatePath('/admin/products');
  revalidatePath('/products');
  redirect('/admin/products');
};

export const deleteProduct = async (id: string): Promise<void> => {
  await authPb();
  await pb.collection('products').delete(id);
  revalidatePath('/admin/products');
  revalidatePath('/products');
  redirect('/admin/products');
};