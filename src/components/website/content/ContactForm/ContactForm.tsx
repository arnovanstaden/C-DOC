'use client';

import styles from './ContactForm.module.scss';
import { enqueueSnackbar } from 'notistack';
import Button from '@components/system/Button/Button';
import { errorNotification } from '@utils/notifications';
import { useState } from 'react';
import Loader from '@components/system/Loader';
import { TContactMessage } from '@types';
import { useForm } from 'react-hook-form';
import TextArea from '@components/system/TextArea';
import Input from '@components/system/Input';
import { sendContactEmail } from '@lib/email';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TContactMessage>();

  const submitContactForm = async (data: TContactMessage) => {
    setLoading(true);

    try {
      await sendContactEmail(data);
      enqueueSnackbar('Thank you for your message. We\'ll get back to you soon!');
      reset();
    } catch (e) {
      console.error(e);
      errorNotification('Error sending message');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.ContactForm}>
      <div className={styles.form}>
        <div className="heading heading--small">
          <h1>Send us a Message.</h1>
          <span />
        </div>
        <form >

          <div className={styles.row}>
            <Input
              inputProps={{
                type: 'text',
                autoComplete: 'name'
              }}
              name='name'
              register={{ ...register('name', { required: true }) }}
              label="Full Name"
              error={errors.name?.type === 'required' ? 'Name is required' : undefined}
            />
          </div>
          <div className={styles.row}>
            <Input
              inputProps={{
                type: 'email',
                autoComplete: 'email'
              }}
              name='email'
              register={{ ...register('email', { required: true }) }}
              label="Email"
              error={errors.email?.type === 'required' ? 'Email is required' : undefined}
            />
          </div>
          <div className={styles.row}>
            <TextArea
              textareaProps={{
                rows: 5
              }}
              name='message'
              register={{ ...register('message', { required: true }) }}
              label="Message"
              error={errors.message?.type === 'required' ? 'Message is required' : undefined}
            />
          </div>
          <Button type="submit" onClick={handleSubmit(submitContactForm)}>
            Send
          </Button>
        </form>
      </div>
      <Loader open={loading} />
    </div>
  );
};

export default ContactForm;
