'use server';

import { IBooking, IBookingExtended } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { redeemCoupon } from './coupons';
import { getCourse } from './courses';
import { sendBookingEmailBuyer, sendBookingEmailMerchant } from './email';

export const revalidateBookings = () => {
  revalidatePath('/', 'layout');
};

export const getBooking = async (id: string): Promise<IBookingExtended | undefined> => {
  await authPb();
  try {
    const result = await pb.collection('bookings').getOne(id, {
      filter: 'deleted = false',
    });

    const pbCourse = await getCourse(result.course);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { courseDates, course, ...pbBooking } = result;

    const booking: IBookingExtended = {
      ...pbBooking,
      proofOfPayment: `${pb.files.getUrl(result, result.proofOfPayment)}`,
      courseName: pbCourse.deleted ? `[DELETED]: ${pbCourse.name}` : pbCourse.name,
      courseLink: `/admin/courses/${pbCourse.id}`,
      courseDates: result.courseDates ? `${result.courseDates.from} - ${result.courseDates.to}` : undefined,
      courseCode: pbCourse.code,
    };

    return booking;
  }
  catch (e) {
    return undefined;
  }
};

export const getBookings = async (): Promise<IBooking[]> => {
  await authPb();
  const result = await pb.collection('bookings').getList();
  return result.items;
};

export const createBooking = async (booking: FormData): Promise<void> => {
  await authPb();
  const newBooking = await pb.collection('bookings').create(booking);

  const coupon = booking.get('coupon') as string;
  if (coupon) {
    await redeemCoupon(coupon);
  }
  // SEND EMAIL
  await sendBookingEmailMerchant(newBooking.id);
  await sendBookingEmailBuyer(newBooking.id);
  revalidateBookings();
};
