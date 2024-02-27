import { IPocketBaseBase, IProduct } from '@types';

export interface IOrderDetail {
  product: IProduct;
  quantity: number;
  price: number;
}

export interface IOrder extends IPocketBaseBase {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  deliveryNotes?: string;

  details: IOrderDetail[];
  total: number;
  status: 'pending' | 'paid';
  payfastPaymentId?: string;
  paymentFee?: number;
}

export interface INewOrder extends Omit<IOrder, 'id' | 'status' | 'payfastPaymentId' | 'paymentFee'> {
  status: 'pending';
}