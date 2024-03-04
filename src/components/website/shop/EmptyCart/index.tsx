'use client';

import Button from '@components/system/Button/Button';
import Section from '@components/website/layout/Section/Section';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useCart } from '@hooks/cart';

const EmptyCart = ({ clearCart }: { clearCart?: boolean }) => {
  const { clearCart: clearOutCart } = useCart();
  useEffect(() => {
    if (clearCart) {
      clearOutCart();
    }
  }, [clearCart]);

  return (
    <main>
      <Section
        heading='Your Cart'
        centerAlign

      >
        <div className={styles.EmptyCart}>
          Your Cart is Empty :(
          <Button href='/shop'>
            Go Shopping
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default EmptyCart;
