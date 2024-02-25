import FormRow from '@components/admin/atoms/FormRow/FormRow';
import styles from './BookingForm.module.scss';
import Button from '@components/system/Button/Button';
import Input from '@components/system/Input';
import { IBookingForm, ICoupon } from '@types';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import Loader from '@components/system/Loader';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { getCouponByCode } from '@lib/coupons';

interface BookingFormProps {
  register: UseFormRegister<IBookingForm>;
  errors: FieldErrors<IBookingForm>;
  total: number;
  watch: UseFormWatch<IBookingForm>;
  setCoupon: (coupon: ICoupon) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ register, errors, total, watch, setCoupon }) => {

  const [loading, setLoading] = useState(false);
  const validateCouponCode = async (e) => {
    e.preventDefault();
    const couponInputValue = watch('coupon');
    enqueueSnackbar('Validating Coupon. Hang tight...');
    const code = couponInputValue.trim();


    if (code === '') {
      return enqueueSnackbar('Please enter a valid coupon code');
    }

    setLoading(true);

    try {
      const couponData = await getCouponByCode(code);

      if (!couponData) {
        enqueueSnackbar('Coupon is Invalid');
        return;
      }

      if (new Date(couponData.expiry) < new Date()) {
        enqueueSnackbar('Coupon is Expired');
        return;
      }

      if (couponData.redeemed) {
        enqueueSnackbar('Coupon already redeemed');
        return;
      }

      enqueueSnackbar('Coupon Validated Successfully');
      setCoupon(couponData);
    } catch (error) {
      enqueueSnackbar('An error occurred while validating coupon');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.BookingForm}>
      <FormRow>
        <Input
          label='Full Name'
          name="name"
          inputProps={{
            type: 'text',
          }}
          register={{ ...register('name', { required: true }) }}
          error={errors.name?.type === 'required' ? 'Full Name is required' : undefined}
        />
        <Input
          label='Email'
          name="email"
          inputProps={{
            type: 'email',
          }}
          register={{ ...register('email', { required: true }) }}
          error={errors.email?.type === 'required' ? 'Email is required' : undefined}
        />
      </FormRow>
      <FormRow>
        <Input
          label='Phone'
          name="phone"
          inputProps={{
            type: 'tel',
          }}
          register={{ ...register('phone', { required: true }) }}
          error={errors.phone?.type === 'required' ? 'Phone is required' : undefined}
        />
        <Input
          label='Country'
          name="country"
          inputProps={{
            type: 'text',
          }}
          register={{ ...register('country', { required: true }) }}
          error={errors.country?.type === 'required' ? 'Country is required' : undefined}
        />
      </FormRow>
      <div className={styles.paymentDetails}>
        <div className={styles.left}>
          <ul>
            <li><span>Bank:</span> ABSA Bank</li>
            <li><span>Sort Code:</span> 632 005</li>
            <li><span>Account Number:</span> 405 - 119 - 0044</li>
            <li><span>SWIFT code:</span> ABSAZAJJXXX</li>
            <li><span>Reference :</span> FIRST NAME/SURNAME/COURSE</li>
            <li><span>Amount :</span>
              <p className={styles.total}
                id="booking-total"
              >
                R {total}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.coupon}>
            <Input
              label='Coupon Code'
              name="coupon"
              inputProps={{
                type: 'text',
              }}
              register={{ ...register('coupon') }}
            />
            <Button outlined type="button" onClick={validateCouponCode}>
              Apply Code
            </Button>
          </div>
          <div className={styles.proofOfPayment}>
            <Input
              label='Proof Of Payment'
              name="proofOfPayment"
              inputProps={{
                type: 'file',
              }}
              register={{ ...register('proofOfPayment', { required: true }) }}
              error={errors.proofOfPayment?.type === 'required' ? 'Proof Of Payment is required' : undefined}
            />
          </div>
        </div>
      </div>
      <Loader open={loading} />
    </div>
  );
};

export default BookingForm;
