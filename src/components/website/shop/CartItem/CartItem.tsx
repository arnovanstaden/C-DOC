import React, { useState } from 'react';
import { updateCart, removeFromCart, ICartItem, IProduct } from '@utils/cart';

// Styles
import styles from './cart-item.module.scss';

// Interfaces
interface ICartItemProps {
  item: ICartItem;
  product: IProduct;
  handleCartChange: () => void;
}

const CartItem = ({ item, product, handleCartChange }: ICartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(product.price * quantity);

  const minusQuantity = () => {
    let currentQuant = quantity;
    if (currentQuant !== 1) {
      currentQuant--;
    }
    handleQuantityUpdate(currentQuant);
  };

  const plusQuantity = () => {
    let currentQuant = quantity;
    currentQuant++;
    handleQuantityUpdate(currentQuant);
  };

  const handleQuantityUpdate = (value) => {
    setQuantity(value);
    setTotal(product.price * value);
    updateCart(product, value);
  };

  const handleItemRemove = () => {
    removeFromCart(product.id, true);
    handleCartChange();
  };

  return (
    <div className={styles.grid}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={product.thumbnail} alt="" />
        </div>
        <div className={styles.details}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.category}>{product.category}</p>
          {product.digital ? <p className={styles.digital}>Digital Product</p> : null}
        </div>
      </div>
      <div className={styles.quantity}>
        <i className="icon-remove" onClick={() => minusQuantity()}></i>
        <p id="cart-item-quantity">{quantity}</p>
        <i className="icon-add" onClick={() => plusQuantity()}></i>
      </div>
      <p className={styles.price}>R {product.price}</p>
      <p className={styles.total}>R {total}</p>
      <i className={`${styles.remove} icon-clear`} onClick={() => handleItemRemove()}></i>
    </div>
  );
};

export default CartItem;
