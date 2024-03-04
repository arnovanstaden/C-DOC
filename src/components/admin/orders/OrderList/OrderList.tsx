import { camelCaseToTitleCase, formatDate } from '@utils/utils';
import Link from 'next/link';
import styles from './OrderList.module.scss';
import OrderFilter from '../OrderFilter';
import { IOrder } from '@types';

const OrderList = async ({ orders }: { orders: IOrder[] }) => {
  return (
    <div>
      <OrderFilter />
      {
        orders.length === 0
          ? <p>You have no orders</p>
          : (
            <ul className={styles.OrderList}>
              {orders.map((order) => (
                <Link href={`/admin/orders/${order.id}`} key={order.id}>
                  <li className={styles.order}>
                    <p><b>{order.id}</b></p>
                    <p><b>{camelCaseToTitleCase(order.status)}</b></p>
                    <p>{`${order.firstName} ${order.lastName}`}</p>
                    <p>{formatDate(order.created)}</p>
                    <p>R {order.total}</p>
                  </li>
                </Link>
              ))}
            </ul>
          )
      }
    </div>
  );
};

export default OrderList;
