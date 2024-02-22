export interface LoginCredentials {
  email: string,
  password: string
}

export interface IArticle {
  id: string;
  name: string;
  description: string;
  author: string;
  researcher: string;
  image: string;
  file: string;
}

export interface ICoupon {
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

export interface ICourse {
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

export interface IProduct {
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

export interface IBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  courses: string[];
  date: Date;
  coupon?: string;
}

export interface IOrder {
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
  date: Date;
  status: 'pending' | 'paid';
  payfastPaymentId: string;
}
