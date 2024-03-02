'use client';

import { useEffect } from 'react';

import styles from './CartSuccess.module.scss';
import { useCart } from '@hooks/cart';

const CartSuccess: React.FC = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className={styles.CartSuccess}>
      <h5>Your transaction has been successful!</h5>
      <p>You will receive emails confirming your order and payment.</p>
      <p>(Be sure to check your spam box if you don't see anything)</p>
    </div>
  );
};

export default CartSuccess;
