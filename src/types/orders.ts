import { IPocketBaseBase } from '@types';

export interface ICartItem {
  id: string;
  quantity: number;
}

export interface ICartItemWithPrice extends ICartItem {
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

  cart: ICartItemWithPrice[];
  total: number;
  status: 'pending' | 'paid';
  paymentId?: number;
  paymentFee?: number;
}

export interface ICartItemExtended extends ICartItemWithPrice {
  name: string
  link: string;
  code: string;
}

export interface IOrderExtended extends Omit<IOrder, 'cart'> {
  cart: ICartItemExtended[];
}

export interface INewOrder extends Omit<IOrder, 'id' | 'status' | 'paymentId' | 'paymentFee'> {
  status: 'pending';
}
export interface IOrderForm extends Omit<INewOrder, 'status' | 'orderDetails'> { }

export interface IPayfastOrder {
  merchant_id: string;
  merchant_key: string;
  amount: number;
  item_name: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  /**
   * The order number
   */
  m_payment_id: string;

  name_first: string;
  name_last: string;
  email_address: string;
}

export interface IPayfastOrderResponse extends Omit<IPayfastOrder, 'amount' | 'merchant_key'> {
  payment_status: string;
  pf_payment_id: number;
  amount_gross: string;
  amount_fee: string;
}