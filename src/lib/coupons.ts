'use server';

import { ICoupon } from '@types';
import { authPb, pb } from './pocketbase';
import { sendEmail } from './email/server';
import { buildCouponEmail } from './email/client';
import voucherCodes from 'voucher-code-generator';

export const getCouponByCode = async (code: string): Promise<ICoupon | undefined> => {
  await authPb();
  const result = await pb.collection('coupons').getFirstListItem(`code="${code}"`);
  return result;
};
export const createCoupon = async (newCoupon: Omit<ICoupon, 'id' | 'code'>): Promise<void> => {
  const coupon = {
    ...newCoupon,
    redeemed: false,
    expiry: new Date(newCoupon.expiry),
    code: voucherCodes.generate({
      length: 30,
      count: 1
    })[0]
  };
  await authPb();
  await pb.collection('coupons').create(coupon);
  await sendEmail({
    subject: `${coupon.discount}% Off Coupon for a Course at C-DOC`,
    body: buildCouponEmail(coupon),
    recipient: coupon.email,
  });
};

export const expireCoupon = async (code: string): Promise<void> => {
  const coupon = await getCouponByCode(code);
  if (!coupon) return;
  await pb.collection('coupons').update(coupon.id, { expired: true });
};