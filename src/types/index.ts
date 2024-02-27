export interface LoginCredentials {
  email: string,
  password: string
}

interface IPocketBaseBase {
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
}

export interface IArticle extends IPocketBaseBase {
  id: string;
  name: string;
  description: string;
  author: string;
  researcher: string;
  image: string;
  file: string;
}

export interface ICoupon extends IPocketBaseBase {
  id: string;
  email: string;
  code: string;
  discount: number;
  expiry: string;
  redeemed: boolean;
}

export interface INewCoupon extends Omit<ICoupon, 'id' | 'expiry'> {
  expiry: Date;
}

export type TContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type TCategory = 'Online Distance Learning (ODL)' | 'Blended learning: Online Theory + Onsite skills development and assessment';

export interface ICourseDate {
  from: string;
  to: string;
}

export interface ICourse extends IPocketBaseBase {
  id: string;
  name: string;
  description: string;
  code: string;
  price: number;
  category: TCategory;
  dates?: ICourseDate[];
}

export type TProductCategory = 'Medical Equipment' | 'Clothing & Gear' | 'Guidance Documents';

export interface IProduct extends IPocketBaseBase {
  id: string;
  category: TProductCategory;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  code: string;
  visible: boolean;
  document?: string
}

export interface IBooking extends IPocketBaseBase {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  course: string;
  courseDates: ICourseDate;
  coupon?: string;
  proofOfPayment: string;
}

export interface INewBooking extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: File;
}

export interface IBookingForm extends Omit<IBooking, 'id' | 'proofOfPayment'> {
  proofOfPayment: FileList;
}

export interface IOrder extends IPocketBaseBase {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  deliveryNotes: string;

  total: number;
  cart: {
    product: string;
    quantity: number;
    price: number;
  }[];
  status: 'pending' | 'paid';
  payfastPaymentId: string;
  paymentFee: number;
}

export interface ISettings extends IPocketBaseBase {
  deliveryFee1: number,
  threshold1: number,
  deliveryFee2: number,
  threshold2: number,
  deliveryFee3: number,
  threshold3: number,
  upperFee: number
}