'use client';
import { IOrderExtended } from '@types';
import styles from './Order.module.scss';
import ViewItem from '@components/admin/atoms/ViewItem/ViewItem';
import ViewOrderProducts from '../ViewOrderProducts';
import Button from '@components/system/Button/Button';
import { sendOrderEmailBuyer } from '@lib/email/orders';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import Loader from '@components/system/Loader';

const Order: React.FC<IOrderExtended> = (order) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { cart, ...rest } = order;

  const handleSendConfirmation = async () => {
    setLoading(true);
    await sendOrderEmailBuyer(order);
    enqueueSnackbar('Confirmation Sent');
    setLoading(false);
  };

  return (
    <div className={styles.Order}>
      <h4>Order No {order.id}</h4>
      <ViewItem item={rest}
        customAction={(
          <Button onClick={handleSendConfirmation}>
            Resend Confirmation
          </Button>
        )}
      />
      <ViewOrderProducts cart={cart} />
      <Loader open={loading} />
    </div>
  );
};

export default Order;
