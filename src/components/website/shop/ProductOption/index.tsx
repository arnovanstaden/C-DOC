'use client';

import { IProduct } from '@types';
import styles from './styles.module.scss';
import Button from '@components/system/Button/Button';
import { useCart } from '@hooks/cart';

const ProductOption: React.FC<IProduct> = (product) => {
  const { increaseItemQuantity } = useCart();

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
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductOption;
