import { IOrderExtended } from '@types';
import styles from './Order.module.scss';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';
import ViewOrderProducts from '../ViewOrderProducts';

const Order: React.FC<IOrderExtended> = (order) => {
  const { cart, ...rest } = order;

  return (
    <div className={styles.Order}>
      <h4>Order No {order.id}</h4>
      <ViewItem {...rest} />
      <ViewOrderProducts cart={cart} />
    </div>
  );
};

export default Order;
