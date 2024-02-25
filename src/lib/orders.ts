'use server';

import { IOrder } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';


export const revalidateOrders = () => {
  revalidatePath('/', 'layout');
};


export const getOrder = async (id: string): Promise<IOrder | undefined> => {
  await authPb();
  try {
    const result = await pb.collection('orders').getOne(id);
    return result;
  }
  catch (e) {
    return undefined;
  }
};

export const getOrders = async (): Promise<IOrder[]> => {
  await authPb();
  const result = await pb.collection('orders').getList();
  return result.items;
};

export const createOrder = async (order: Omit<IOrder, 'id'>): Promise<void> => {
  await authPb();
  await pb.collection('orders').create(order);
  revalidateOrders();
};
