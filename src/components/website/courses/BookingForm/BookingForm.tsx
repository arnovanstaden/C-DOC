import FormRow from '@components/admin/atoms/FormRow/FormRow';
import styles from './BookingForm.module.scss';
import Button from '@components/system/Button/Button';
import Input from '@components/system/Input';
import { IBooking } from '@types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface BookingFormProps {
  register: UseFormRegister<IBooking>;
  errors: FieldErrors<IBooking>
}

const BookingForm: React.FC<BookingFormProps> = ({ register, errors }) => {
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
                {/* {selectedCourse ?
            `R ${selectedCourse.price - (coupon ? selectedCourse.price * (coupon.discount / 100) : 0)}`
            : 'Select Course'} */}
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
              register={{ ...register('country') }}
            />
            <Button outlined type="button" >
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
    </div>
  );
};

export default BookingForm;
