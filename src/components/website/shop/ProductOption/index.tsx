'use client';

import { IProduct } from '@types';
import styles from './styles.module.scss';
import Button from '@components/system/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '@hooks/cart';

const ProductOption: React.FC<IProduct> = (product) => {
  const { cart, decreaseItemQuantity, increaseItemQuantity } = useCart();
  const quantityInCart = cart?.find((item) => item.id === product.id)?.quantity || 1;

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
      {!product.document && (
        <div className={styles.quantity}>
          <IconButton
            onClick={() => decreaseItemQuantity(product.id)}
          >
            <RemoveIcon />
          </IconButton>
          <p>{quantityInCart}</p>
          <IconButton onClick={() => increaseItemQuantity(product.id)}>
            <AddIcon />
          </IconButton>
        </div>
      )}
      <Button
        className={styles.add}
        onClick={() => increaseItemQuantity(product.id)}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductOption;
