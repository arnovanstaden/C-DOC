'use client';

import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import Button from '@components/system/Button/Button';
import Input from '@components/system/Input';
import Loader from '@components/system/Loader';
import { useState } from 'react';
import { LoginCredentials } from '@types';
import { Metadata } from 'next';
import { login } from '@lib/auth';
import { errorNotification } from '@utils/notifications';
import { enqueueSnackbar } from 'notistack';

export const metadata: Metadata = {
  title: 'Login | C-DOC Admin',
  description: 'Login | C-DOC Admin',
  robots: {
    index: false,
    follow: false,
  }
};

const AdminLoginForm = (): JSX.Element | null => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const handleLogin = async (loginData) => {
    setLoading(true);
    try {
      await login(loginData);
      enqueueSnackbar('Welcome Back!');
    } catch (error) {
      errorNotification('Login Failed', error);
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.AdminLogin}>
      <div className={styles.content}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label='Email'
            inputProps={{
              type: 'email',
              autoComplete: 'email'
            }}
            name='email'
            register={{ ...register('email', { required: true }) }}
            error={errors.email?.type === 'required' ? 'Email is required' : undefined}
          />
          <Input
            label='Password'
            inputProps={{
              type: 'password',
              autoComplete: 'password'
            }}
            name='password'
            register={{ ...register('password', { required: true }) }}
            error={errors.password?.type === 'required' ? 'Password is required' : undefined}
          />
          <Button type="submit" onClick={handleSubmit(handleLogin)}>Login</Button>
        </form>
      </div>
      <Loader open={loading} />
    </div>
  );
};

export default AdminLoginForm;
