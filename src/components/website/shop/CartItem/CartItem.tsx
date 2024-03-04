'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
// Styles
import styles from './CartItem.module.scss';
import { useCart } from '@hooks/cart';
import { IProduct } from '@types';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

interface CartItemProps {
  product: IProduct;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } = useCart();

  return (
    <div className={styles.grid}>
      <Link href={`/shop/${product.id}`} className={styles.item}>
        <div className={styles.image}>
          <img src={product.thumbnail} alt="" />
        </div>
        <div className={styles.details}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.category}>{product.category}</p>
          {product.document ? <p className={styles.digital}>Digital Product</p> : null}
        </div>
      </Link>
      {!product.document && (
        <>
          <div className={styles.quantity}>
            <div className={styles.quantity}>
              <IconButton
                onClick={() => decreaseItemQuantity(product.id)}
              >
                <RemoveIcon />
              </IconButton>
              <p>{quantity}</p>
              <IconButton onClick={() => increaseItemQuantity(product.id, !!product.document)}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <p className={styles.price}>R {product.price}</p>
        </>
      )}
      <p className={styles.total}>R {product.price * quantity}</p>
      <IconButton onClick={() => removeItem(product.id)} className={styles.remove}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default CartItem;
