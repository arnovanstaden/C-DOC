'use server';

import { IBooking, IBookingSimple, IExpandedBooking } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';

export const revalidateBookings = () => {
  revalidatePath('/', 'layout');
};

export const getBooking = async (id: string): Promise<IBooking | undefined> => {
  await authPb();
  try {
    const result: IExpandedBooking = await pb.collection('bookings').getOne(id);

    const { expand, ...rest } = result;

    const booking: IBooking = {
      ...rest,
      proofOfPayment: `${pb.files.getUrl(result, result.proofOfPayment)}`,
      course: expand.course,
    };
    return booking;
  }
  catch (e) {
    return undefined;
  }
};

export const getBookings = async (): Promise<IBookingSimple[]> => {
  await authPb();
  const result = await pb.collection('bookings').getList();
  return result.items;
};

export const createBooking = async (booking: FormData): Promise<void> => {
  await authPb();
  await pb.collection('bookings').create(booking);
  // await sendEmail({
  //   subject: `${coupon.discount}% Off Coupon for a Course at C-DOC`,
  //   body: buildCouponEmail(coupon),
  //   recipient: coupon.email,
  // });
  revalidateBookings();
};
