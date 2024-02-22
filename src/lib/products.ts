'use server';

import { IProduct } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getProduct = async (id: string): Promise<IProduct> => {
  await authPb();
  const result = await pb.collection('products').getOne(id);
  return result;
};

export const getProducts = async (): Promise<IProduct[]> => {
  await authPb();
  const result = await pb.collection('products').getList();
  return result.items;
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