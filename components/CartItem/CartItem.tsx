import Link from "next/link";
import React, { useState } from "react";
import { updateCart, removeFromCart } from "../../utils/cart";


// Styles
import styles from "./cart-item.module.scss"

const CartItem = (props) => {
    const product = props.product;
    const [quantity, setQuantity] = useState(props.quantity);
    const [total, setTotal] = useState(product.price * quantity);

    const minusQuantity = () => {
        let currentQuant = quantity;
        if (currentQuant !== 1) {
            currentQuant--;
        }
        handleQuantityUpdate(currentQuant)
    }

    const plusQuantity = () => {
        let currentQuant = quantity;
        currentQuant++;
        handleQuantityUpdate(currentQuant)
    }

    const handleQuantityUpdate = (value) => {
        setQuantity(value)
        setTotal(product.price * value)
        updateCart(product, value);
    }

    const handleItemRemove = () => {
        removeFromCart(product);
        props.handleCartChange()
    }

    return (
        <div className={styles.grid}>
            <div className={styles.item}>
                <div className={styles.image}>
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className={styles.details}>
                    <h5>{product.name}</h5>
                    <p>{product.category}</p>
                </div>
            </div>
            <div className={styles.quantity}>
                <i className="material-icons" onClick={() => minusQuantity()}>remove</i>
                <p id="cart-item-quantity">{quantity}</p>
                <i className="material-icons" onClick={() => plusQuantity()}>add</i>
            </div>
            <p className={styles.price}>R {product.price}</p>
            <div className={styles.total}>
                <p>R {total}</p>
            </div>
            <i className={`${styles.remove} material-icons`} onClick={() => handleItemRemove()}>close</i>
        </div >
    )
}

export default CartItem
