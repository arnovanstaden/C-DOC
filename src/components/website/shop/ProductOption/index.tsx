'use client';

import { IProduct } from '@types';
import styles from './styles.module.scss';
import { useState } from 'react';
import Button from '@components/system/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductOption: React.FC<IProduct> = (product) => {
  const [quantity, setQuantity] = useState(1);

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
      <div className={styles.quantity}>
        <IconButton
          onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}
        >
          <RemoveIcon />
        </IconButton>
        <p>{quantity}</p>
        <IconButton onClick={() => setQuantity((prev) => prev + 1)}>
          <AddIcon />
        </IconButton>
      </div>
      <Button
        className={styles.add}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductOption;
