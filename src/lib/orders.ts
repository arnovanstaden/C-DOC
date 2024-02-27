'use server';

import { IExpandedOrder, IOrder, IOrderSimple } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';


export const revalidateOrders = () => {
  revalidatePath('/', 'layout');
};


export const getOrder = async (id: string): Promise<IOrder | undefined> => {
  await authPb();
  try {
    const result: IExpandedOrder = await pb.collection('orders').getOne(id, {
      expand: 'orderDetails,orderDetails.product',
    });

    const { expand, ...rest } = result;

    const order: IOrder = {
      ...rest,
      orderDetails: expand.orderDetails.map((detail) => {
        const { expand, ...rest } = detail;
        return {
          ...rest,
          product: expand.product,
        };
      }),
    };
    return order;
  }
  catch (e) {
    return undefined;
  }
};

export const getOrders = async (): Promise<IOrderSimple[]> => {
  await authPb();
  const result = await pb.collection('orders').getList();
  return result.items;
};

export const createOrder = async (order: Omit<IOrder, 'id'>): Promise<void> => {
  await authPb();
  await pb.collection('orders').create(order);
  revalidateOrders();
};
