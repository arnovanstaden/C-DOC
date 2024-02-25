import { getOrders } from '@lib/orders';
import { formatDate } from '@utils/utils';
import Link from 'next/link';
import styles from './OrderList.module.scss';

const OrderList = async () => {
  const orders = await getOrders();

  return (
    orders.length === 0
      ? <p>You have no orders</p>
      : (
        <ul className={styles.OrderList}>
          {orders.map((order) => (
            <Link href={`/admin/orders/${order.id}`} key={order.id}>
              <li className={styles.order}>
                <p><b>{order.id}</b></p>
                <p><b>{`${order.firstName} ${order.lastName}`}</b></p>
                <p>{formatDate(order.created)}</p>
                <p>R {order.total}</p>
              </li>
            </Link>
          ))}
        </ul>
      )
  );
};

export default OrderList;
