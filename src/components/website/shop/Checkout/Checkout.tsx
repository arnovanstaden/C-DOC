/* eslint-disable camelcase */
'use client';

import { enqueueSnackbar } from 'notistack';
import Button from '@components/system/Button/Button';
import styles from './checkout.module.scss';
import { ICartItemWithPrice, INewOrder, IOrder, IOrderForm, IPayfastOrder } from '@types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import FormRow from '@components/system/FormRow/FormRow';
import Input from '@components/system/Input';
import TextArea from '@components/system/TextArea';
import { createOrder } from '@lib/orders';
import { errorNotification } from '@utils/notifications';

// Interface
interface ICheckout {
  deliveryFee: number;
  subTotal: number;
  cart: ICartItemWithPrice[];
}

const Checkout = ({ deliveryFee, subTotal, cart }: ICheckout) => {
  const total = subTotal + deliveryFee;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderForm>();

  const handleSubmitInvisibleForm = (order: IOrder) => {

    // Create a dynamic form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = process.env.NEXT_PUBLIC_PAYFAST_PAYMENT_URL;

    const payfastFormData: IPayfastOrder = {
      merchant_id: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID,
      merchant_key: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY,
      amount: total,
      item_name: 'C-DOC Cart',
      return_url: process.env.NEXT_PUBLIC_PAYFAST_RETURN_URL,
      cancel_url: process.env.NEXT_PUBLIC_PAYFAST_CANCEL_URL,
      notify_url: process.env.NEXT_PUBLIC_PAYFAST_NOTIFY_URL,
      m_payment_id: order.id,
      name_first: order.firstName,
      name_last: order.lastName,
      email_address: order.email,
    };

    // Populate the form with inputs from the submission data
    Object.keys(payfastFormData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = payfastFormData[key];
      form.appendChild(input);
    });

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
  };

  const handleSubmitVisibleForm = async (data: IOrderForm) => {
    try {
      enqueueSnackbar('Your order is being processed. You\'ll be redirected to Payfast momentarily...');
      setLoading(true);

      const pbOrder: INewOrder = {
        ...data,
        cart,
        total,
        status: 'pending',
        deliveryFee,
      };

      const order = await createOrder(pbOrder);
      handleSubmitInvisibleForm(order);
    } catch (e) {
      console.error(e);
      errorNotification('Error processing your order', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.grid}>
      <form
        action=""
        className={styles.form}
      >
        <FormRow>
          <Input
            label='First Name'
            name="firstName"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('firstName', { required: true }) }}
            error={errors.firstName?.type === 'required' ? 'First Name is required' : undefined}
          />
          <Input
            label='Last Name'
            name="lastName"
            inputProps={{
              type: 'text',
            }}
            register={{ ...register('lastName', { required: true }) }}
            error={errors.lastName?.type === 'required' ? 'Last Name is required' : undefined}
          />
        </FormRow>
        <FormRow>
          <Input
            label='Email'
            name="email"
            inputProps={{
              type: 'email',
            }}
            register={{ ...register('email', { required: true }) }}
            error={errors.email?.type === 'required' ? 'Email is required' : undefined}
          />
          <Input
            label='Phone'
            name="phone"
            inputProps={{
              type: 'tel',
            }}
            register={{ ...register('phone', { required: true }) }}
            error={errors.phone?.type === 'required' ? 'Phone is required' : undefined}
          />
        </FormRow>
        <TextArea
          label='Delivery Address'
          name="deliveryAddress"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('deliveryAddress', { required: true }) }}
          error={errors.deliveryAddress?.type === 'required' ? 'Delivery Address is required' : undefined}
        />
        <TextArea
          label='Delivery Notes'
          name="deliveryNotes"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('deliveryNotes') }}
          error={errors.deliveryNotes?.type === 'required' ? 'Delivery Notes is required' : undefined}
        />
      </form>

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
        <Button type="submit" onClick={handleSubmit(handleSubmitVisibleForm)}>
          Pay Now
        </Button>
      </div>
      <Loader open={loading} />
    </div>
  );
};

export default Checkout;
