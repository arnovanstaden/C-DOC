export interface LoginCredentials {
  email: string,
  password: string
}

interface IPocketBaseBase {
  created: Date;
  updated: Date;
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
  expiry: Date;
  redeemed: boolean;
}

export type TContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type TCategory = 'Online Distance Learning (ODL)' | 'Blended learning: Online Theory + Onsite skills development and assessment';

export interface ICourse extends IPocketBaseBase {
  id: string;
  name: string;
  description: string;
  code: string;
  price: number;
  category: TCategory;
  dates?: [{
    from: Date;
    to: Date;
  }]
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
}

export interface IBooking extends IPocketBaseBase {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  course: {
    id: string;
    date?: {
      from: Date;
      to: Date;
    }
  }
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
  orderNumber: number;

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