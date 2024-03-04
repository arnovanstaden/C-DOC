'use client';

import { IProduct } from '@types';
import styles from './styles.module.scss';
import Button from '@components/system/Button/Button';
import { useCart } from '@hooks/cart';

const ProductOption: React.FC<IProduct> = (product) => {
  const { increaseItemQuantity, cart } = useCart();

  const alreadyInCart = !!cart?.find((item) => item.id === product.id);

  if (product.price === 0 && product.document) {
    return (
      <div className={styles.cart}>
        <Button href={product.document} target="blank">
          Download
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.ProductOption}>
      <Button
        className={styles.add}
        onClick={() => increaseItemQuantity(product.id, !!product.document)}
        disabled={alreadyInCart}
      >
        Add To Cart
      </Button>
      {alreadyInCart && (
        <small>
          This item is already in your cart.
          <br />
          You can update the quantity during chekcout.
        </small>
      )}
    </div>
  );
};

export default ProductOption;
