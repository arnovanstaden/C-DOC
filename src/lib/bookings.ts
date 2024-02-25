'use server';

import { IBooking } from '@types';
import { authPb, pb } from './pocketbase';

export const getBooking = async (id: string): Promise<IBooking> => {
  await authPb();
  const result = await pb.collection('bookings').getOne(id);
  const booking: IBooking = {
    ...result,
    proofOfPayment: `${pb.files.getUrl(result, result.proofOfPayment)}`,
  };
  return booking;
};

export const getBookings = async (): Promise<IBooking[]> => {
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
};
