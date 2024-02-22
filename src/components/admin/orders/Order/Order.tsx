import { IOrder } from '@types';
import styles from './Order.module.scss';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';

const Order: React.FC<IOrder> = (order) => {
  return (
    <div className={styles.Order}>
      <h4>Order No {order.orderNumber}</h4>
      <ViewItem {...order} />
    </div>
  );
};

export default Order;
