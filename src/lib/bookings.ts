'use server';

import { IBooking } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
  revalidatePath('/admin/articles');
  revalidatePath('/articles');
  redirect('/admin/articles');
};
