import { IPocketBaseBase } from '@types';

export interface ICoupon extends IPocketBaseBase {
  id: string;
  email: string;
  code: string;
  discount: number;
  expiry: string;
  redeemed: boolean;
}

export interface ICouponForm extends Omit<ICoupon, 'id'> {
  code: undefined
}

export interface INewCoupon extends Omit<ICoupon, 'id' | 'expiry' | 'redeemed'> {
  redeemed: false
  expiry: Date;
  code: undefined
}