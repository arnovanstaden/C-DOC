'use client';

import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import Button from '@components/system/Button/Button';
import styles from './checkout.module.scss';

// Interface
interface ICheckout {
  deliveryFee: number;
  subTotal: number
}

const Checkout = ({ deliveryFee, subTotal }: ICheckout) => {
  const total = subTotal + deliveryFee;

  const handleSubmitOrder = () => {
    enqueueSnackbar('Your order is being processed. You\'ll be redirected to Payfast momentarily...');
    const order = {
      cart_items: [],
      amount_gross: 0
    };
    const formData = new FormData(document.querySelector('#checkout-form'));
    formData.forEach((value, key) => order[key] = value);

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/orders/confirmation`,
      data: order
    })
      .then(result => {
        initPayment(order, result.data.order_number);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const initPayment = (order, order_number) => {
    (document.querySelector('#checkout-form input[name=\'amount\']') as HTMLInputElement).value = order.amount_gross;
    (document.querySelector('#checkout-form input[name=\'custom_str1\']') as HTMLInputElement).value = order_number;
    (document.querySelector('#checkout-form') as HTMLFormElement).submit();
  };

  return (
    <div className={styles.grid}>
      <div className={styles.form}>
        <form action={process.env.NEXT_PUBLIC_PAYFAST_PAYMENT_URL} method="POST" id="checkout-form">
          <div className={styles.row}>
            <div>
              <input type="text" name="name_first" placeholder="First Name" required />
            </div>
            <div>
              <input type="text" name="name_last" placeholder="Last Name" required />
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <input type="email" name="email_address" placeholder="Email Address" required />
            </div>
            <div>
              <input type="tel" name="custom_str2" placeholder="Phone Number" required />
            </div>
          </div>
          <div className={styles.row}>
            <textarea name="delivery_address" placeholder="Delivery Address"></textarea>
          </div>
          <div className={styles.row}>
            <div>
              <input type="text" name="city" placeholder="City" required />
            </div>
            <div>
              <input type="text" name="postcode" placeholder="Post Code" required />
            </div>
          </div>
          <div className={styles.row}>
            <textarea name="delivery_notes" placeholder="Delivery Notes"></textarea>
          </div>
          <input type="hidden" name="merchant_id" value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID} />
          <input type="hidden" name="merchant_key" value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY} />
          <input type="hidden" name="return_url" value={process.env.NEXT_PUBLIC_PAYFAST_RETURN_URL} />
          <input type="hidden" name="notify_url" value={`${process.env.NEXT_PUBLIC_API_URL}/orders/`} />
          <input type="hidden" name="cancel_url" value="http://www.c-doc.co.za/cart" />
          <input type="hidden" name="item_name" value="C-DOC Cart" />
          <input type="hidden" name="amount" value="" />
          <input type="hidden" name="custom_str1" value="" />
        </form>
      </div>

      <div className={styles.summary}>
        <h2>Order Summary</h2>
        <div className={styles.row}>
          <p>Subtotal</p>
          <h6>R {subTotal}</h6>
        </div>
        <div className={styles.row}>
          <p>Shipping</p>
          <h6>R {deliveryFee}</h6>
        </div>
        <div className={`${styles.total} ${styles.row}`}>
          <p>Total</p>
          <h6>R {total}</h6>
        </div>
        <Button type="submit" onClick={handleSubmitOrder}>
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
