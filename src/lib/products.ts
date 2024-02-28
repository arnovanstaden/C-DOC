'use server';

import { IProduct } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const revalidateProducts = () => {
  revalidatePath('/', 'layout');
  redirect('/admin/products');
};

export const getProduct = async (id: string): Promise<IProduct | undefined> => {
  await authPb();
  try {
    const result = await pb.collection('products').getOne(id);

    const product: IProduct = {
      ...result,
      thumbnail: pb.files.getUrl(result, result.thumbnail),
      document: pb.files.getUrl(result, result.document),
      images: result.images.map((image) => pb.files.getUrl(result, image))
    };

    return product;
  }
  catch (e) {
    return undefined;
  }
};


export const getProducts = async (sortBy: keyof IProduct = 'updated', category?: IProduct['category']): Promise<IProduct[]> => {
  await authPb();
  const result = await pb.collection('products').getList(undefined, undefined, {
    sort: `-${sortBy}`,
    filter: `deleted = false${category ? ` && category = '${category}'` : ''}`,
  });

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
  revalidateProducts();
};

export const updateProduct = async (id: string, product: FormData | object, redirect = true): Promise<void> => {
  await authPb();
  await pb.collection('products').update(id, product);
  if (!redirect) {
    revalidatePath('/', 'layout');
    return;
  };
  revalidateProducts();
};

export const deleteProduct = async (id: string): Promise<void> => {
  await authPb();
  await pb.collection('products').delete(id);
  revalidateProducts();
};