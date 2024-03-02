import { IPocketBaseBase, IProduct } from '@types';

export interface IOrderDetailSimple extends IPocketBaseBase {
  product: string;
  quantity: number;
  price: number;
}

export interface IOrderDetail extends Omit<IOrderDetailSimple, 'product'> {
  product: IProduct;
}

export interface IExpandedOrderDetail extends Omit<IOrderDetailSimple, 'product'> {
  expand: {
    product: IProduct;
  }
}

export interface IOrderSimple extends IPocketBaseBase {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  deliveryNotes?: string;

  orderDetails: string[];
  total: number;
  status: 'pending' | 'paid';
  payfastPaymentId?: string;
  paymentFee?: number;
}

export interface IOrder extends Omit<IOrderSimple, 'orderDetails'> {
  orderDetails: IOrderDetail[];
}

export interface IExpandedOrder extends Omit<IOrder, 'orderDetails'> {
  expand: {
    orderDetails: IExpandedOrderDetail[];
  }
}

export interface INewOrder extends Omit<IOrder, 'id' | 'status' | 'payfastPaymentId' | 'paymentFee'> {
  status: 'pending';
}

export interface ICartItem {
  id: string;
  quantity: number;
}
