'use server';

import { ICoupon, ICouponForm, INewCoupon } from '@types';
import { authPb, pb } from './pocketbase';
import { sendCouponEmail } from './email';
import voucherCodes from 'voucher-code-generator';

export const getCouponByCode = async (code: string): Promise<ICoupon | undefined> => {
  await authPb();
  const result = await pb.collection('coupons').getFirstListItem(`code="${code}"`);
  return result;
};
export const createCoupon = async (newCoupon: ICouponForm): Promise<void> => {
  const coupon: INewCoupon = {
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
  await sendCouponEmail(coupon);
};

export const redeemCoupon = async (code: string): Promise<void> => {
  const coupon = await getCouponByCode(code);
  if (!coupon) return;
  await pb.collection('coupons').update(coupon.id, { redeemed: true });
};