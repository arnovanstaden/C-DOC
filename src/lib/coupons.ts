'use server';

import { ICoupon } from '@types';
import { authPb, pb } from './pocketbase';
import { sendEmail } from './email/server';
import { buildCouponEmail } from './email/client';

export const getCouponByCode = async (code: string): Promise<ICoupon | undefined> => {
  await authPb();
  const result = await pb.collection('coupons').getList(1, 1, {
    filter: `code === ${code}`,
  });
  return result.items[0];
};
export const createCoupon = async (newCoupon: Omit<ICoupon, 'id'>): Promise<void> => {
  await authPb();
  await pb.collection('coupons').create(newCoupon);
  await sendEmail({
    subject: `${newCoupon.discount}% Off Coupon for a Course at C-DOC`,
    body: buildCouponEmail(newCoupon),
    recipient: newCoupon.email,
  });
};

export const expireCoupon = async (code: string): Promise<void> => {
  const coupon = await getCouponByCode(code);
  if (!coupon) return;
  await pb.collection('coupons').update(coupon.id, { expired: true });
};