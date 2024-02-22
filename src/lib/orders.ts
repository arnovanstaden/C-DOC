'use server';

import { IOrder } from '@types';
import { authPb, pb } from './pocketbase';

export const getOrder = async (id: string): Promise<IOrder> => {
  await authPb();
  const result = await pb.collection('orders').getOne(id);
  return result;
};

export const getOrders = async (): Promise<IOrder[]> => {
  await authPb();
  const result = await pb.collection('orders').getList();
  return result.items;
};

export const createOrder = async (order: Omit<IOrder, 'id'>): Promise<void> => {
  await authPb();
  await pb.collection('orders').create(order);
};
