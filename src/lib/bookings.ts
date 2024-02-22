'use server';

import { IBooking } from '@types';
import { authPb, pb } from './pocketbase';

export const getBooking = async (id: string): Promise<IBooking> => {
  await authPb();
  const result = await pb.collection('bookings').getOne(id);
  return result;
};

export const getBookings = async (): Promise<IBooking[]> => {
  await authPb();
  const result = await pb.collection('bookings').getList();
  return result.items;
};

export const createBooking = async (booking: Omit<IBooking, 'id'>): Promise<void> => {
  await authPb();
  await pb.collection('bookings').create(booking);
};
