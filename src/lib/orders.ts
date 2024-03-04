'use server';

import { ICartItemExtended, INewOrder, IOrder, IOrderExtended } from '@types';
import { authPb, pb } from './pocketbase';
import { revalidatePath } from 'next/cache';
import { getProductsById } from './products';
import { sendOrderEmailBuyer, sendOrderEmailMerchant } from './email/orders';


export const revalidateOrders = () => {
  revalidatePath('/', 'layout');
};


export const getOrder = async (id: string): Promise<IOrderExtended | undefined> => {
  await authPb();
  try {
    const result = await pb.collection('orders').getOne(id);
    const productsInCart = await getProductsById(result.cart.map((item) => item.id), false);

    const cart: ICartItemExtended[] = productsInCart.map((product) => {
      const cartItem = result.cart.find((item) => item.id === product.id);
      return {
        name: product.deleted ? `[DELETED] ${product.name}` : product.name,
        link: `/admin/products/${product.id}`,
        code: product.code,
        price: cartItem.price,
        quantity: cartItem.quantity,
        id: product.id,
      };
    });

    const order: IOrderExtended = {
      ...result,
      cart,
    };

    return order;
  }
  catch (e) {
    return undefined;
  }
};

export const getOrders = async (status?: string): Promise<IOrder[]> => {
  await authPb();

  const result = await pb.collection('orders').getList(undefined, undefined, {
    filter: status ? `status = '${status}'` : '',
    sort: '-updated',
  });

  return result.items;
};

export const createOrder = async (order: INewOrder): Promise<IOrder> => {
  await authPb();

  const newOrder: INewOrder = {
    ...order,
    status: 'pending',
  };

  const result = await pb.collection('orders').create(newOrder);
  revalidateOrders();
  return result;
};

interface IMarkOrderAsPaid {
  id: string;
  amount: number;
  paymentId: number;
  paymentFee: number;
}

/**
 * Marks an order as paid if it meets the required conditions.
 * 
 * @param {IMarkOrderAsPaid} params - The parameters including id, amount, and paymentId.
 * @returns {Promise<IOrder>} The updated order object.
 * @throws {Error} If the order is already paid, the amount does not match, or the order cannot be found.
 */
export const markOrderAsPaid = async ({ id, amount, paymentId, paymentFee }: IMarkOrderAsPaid): Promise<IOrder> => {
  await authPb();

  try {
    const order = await pb.collection('orders').getOne(id);
    if (!order) {
      throw new Error('Order does not exist');
    }
    if (order.status === 'paid') {
      throw new Error('Order is already paid');
    }
    if (order.total !== amount) {
      throw new Error('Incorrect amount');
    }

    const updatedOrder = await pb.collection('orders').update(id, {
      status: 'paid',
      paymentId,
      paymentFee,
    });

    revalidateOrders();
    await sendOrderEmailMerchant(updatedOrder);
    await sendOrderEmailBuyer(updatedOrder);
    return updatedOrder;
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};