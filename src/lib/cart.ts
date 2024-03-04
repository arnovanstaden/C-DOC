'use server';

import { ICartItem } from '@types';
import { revalidatePath } from 'next/cache';
import { getProductsById } from './products';

export const revalidateCart = () => {
  revalidatePath('/shop/cart', 'page');
};

export const validateCart = async (cart: ICartItem[]): Promise<boolean> => {
  const hasCorrectProperties = cart.every((item) => !!item.id && !!item.quantity);
  if (!hasCorrectProperties) {
    return false;
  }

  const hasValidQuantity = cart.every((item) => item.quantity > 0);
  if (!hasValidQuantity) {
    return false;
  }

  const products = await getProductsById(cart.map((item) => item.id));

  if (products.length !== cart.length) {
    return false;
  }

  return true;
};