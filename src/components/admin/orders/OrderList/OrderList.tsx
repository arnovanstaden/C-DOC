import { getOrders } from '@lib/orders';
import Link from 'next/link';

const OrderList = async () => {
  const orders = await getOrders();

  return (
    orders.length === 0
      ? <p>You have no orders</p>
      : (
        <ul>
          {orders.map((order) => (
            <Link href={`/admin/orders/${order.id}`} key={order.id}>
              <li>{order.orderNumber}</li>
            </Link>
          ))}
        </ul>
      )
  );
};

export default OrderList;
