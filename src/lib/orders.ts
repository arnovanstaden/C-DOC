'use server';

import { INewOrder, IOrder } from '@types';
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

export const createOrder = async (order: INewOrder): Promise<IOrder> => {
  await authPb();

  const newOrder: INewOrder = {
    ...order,
    status: 'pending',
  };

  const result = await pb.collection('orders').create(newOrder);
  revalidateOrders();
  return result;
};

interface IMarkOrderAsPaid {
  id: string;
  amount: number;
  paymentId: number;
  paymentFee: number;
}

/**
 * Marks an order as paid if it meets the required conditions.
 * 
 * @param {IMarkOrderAsPaid} params - The parameters including id, amount, and paymentId.
 * @returns {Promise<IOrder>} The updated order object.
 * @throws {Error} If the order is already paid, the amount does not match, or the order cannot be found.
 */
export const markOrderAsPaid = async ({ id, amount, paymentId, paymentFee }: IMarkOrderAsPaid): Promise<IOrder> => {
  await authPb();

  try {
    const order = await pb.collection('orders').getOne(id);
    if (!order) {
      throw new Error('Order does not exist');
    }
    if (order.status === 'paid') {
      throw new Error('Order is already paid');
    }
    if (order.total !== amount) {
      throw new Error('Incorrect amount');
    }

    const updatedOrder = await pb.collection('orders').update(id, {
      status: 'paid',
      paymentId,
      paymentFee,
    });

    revalidateOrders();
    return updatedOrder;
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};