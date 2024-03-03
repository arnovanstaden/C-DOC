'use client';

import Section from '@components/website/layout/Section/Section';
import styles from './EquipmentForm.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import EquipmentList from '../EquipmentList/EquipmentList';
import { IEquipment, IEquipmentForm } from '@types';
import Input from '@components/system/Input';
import FormRow from '@components/system/FormRow/FormRow';
import Button from '@components/system/Button/Button';
import Loader from '@components/system/Loader';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { sendEquipmentEnquiryEmail } from '@lib/email';

const EquipmentForm: React.FC<{ equipment: IEquipment[] }> = ({ equipment }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IEquipmentForm>();

  const handleSubmitForm = async (data: IEquipmentForm) => {
    const enquiry = {
      ...data,
      items: Object.fromEntries(
        Object.entries(data.items).filter(([, value]) => !!value),
      )
    };

    setLoading(true);
    try {
      enqueueSnackbar('Thank you for your request. We will get back to you soon.');
      await sendEquipmentEnquiryEmail(enquiry);
      reset();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.EquipmentForm}>
      <Section
        heading="C-DOC Medical Kit Order Form."

      >
        <form action="">
          <div className={styles.intro}>
            <div className={styles.type}>
              <div className={styles.row}>
                <label>Request a Quotation</label>
                <input
                  type="radio"
                  name="type"
                  value="Request a quotation"
                  required
                  {...register('enquiryType', { required: true })}
                />
              </div>
              <div className={styles.row}>
                <label>Request More Information</label>
                <input
                  type="radio"
                  name="type"
                  value="Request more information"
                  required
                  {...register('enquiryType', { required: true })}
                />
              </div>
              <div className={styles.row}>
                <label>Request Advertising Space in Helpful Hints</label>
                <input
                  type="radio"
                  name="type"
                  value="Request Advertising Space in Helpful Hints"
                  required
                  {...register('enquiryType', { required: true })}
                />
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/images/pages/services/catalogue.png"
                alt="C-DOC Medical Kit"
                width={500}
                height={500}
              />
            </div>
          </div>

          <EquipmentList equipment={equipment} register={register} />

          <div className={styles.details}>
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
                label='Company'
                name="company"
                inputProps={{
                  type: 'text',
                }}
                register={{ ...register('company', { required: true }) }}
                error={errors.company?.type === 'required' ? 'Company is required' : undefined}
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
                label='City'
                name="city"
                inputProps={{
                  type: 'text',
                }}
                register={{ ...register('city', { required: true }) }}
                error={errors.city?.type === 'required' ? 'City is required' : undefined}
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
            <div className={styles.buttons}>
              <Button type="submit" onClick={handleSubmit(handleSubmitForm)}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Section>
      <Loader open={loading} />
    </div>
  );
};

export default EquipmentForm;
