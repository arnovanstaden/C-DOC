'use server';

import { revalidatePath } from 'next/cache';

export const revalidateCart = () => {
  revalidatePath('/shop/cart', 'page');
};
