export interface LoginCredentials {
  email: string,
  password: string
}

export interface IPocketBaseBase {
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
}

export type TContactMessage = {
  name: string;
  email: string;
  message: string;
};

export interface ISettings extends IPocketBaseBase {
  deliveryFee1: number,
  threshold1: number,
  deliveryFee2?: number,
  threshold2?: number,
  deliveryFee3?: number,
  threshold3?: number,
  upperFee: number
}

export * from './articles';
export * from './bookings';
export * from './coupons';
export * from './courses';
export * from './orders';
export * from './products';