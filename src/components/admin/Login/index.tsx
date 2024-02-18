'use client';

import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import Button from '@components/system/Button/Button';
// import Input from '@components/UI/Input';
import Loader from '@components/system/Loader';
import { useState } from 'react';
import { LoginCredentials } from '@types';

const AdminLoginForm = (): JSX.Element | null => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    // register,
    handleSubmit,
  } = useForm<LoginCredentials>();

  const handleLogin = async () => {
    setLoading(true);
    // await login(loginData s LoginCredentials);
    setLoading(false);
  };

  return (
    <div className={styles.AdminLogin}>
      <div className={styles.content}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* <Input
            inputProps={{
              type: 'email',
              autoComplete: 'email'
            }}
            name='email'
            register={{ ...register('email', { required: true }) }}
          />
          <Input
            inputProps={{
              type: 'password',
              autoComplete: 'password'
            }}
            name='password'
            register={{ ...register('password', { required: true }) }}
          /> */}
          <Button>Login</Button>
        </form>
      </div>
      <Loader open={loading} />
    </div>
  );
};

export default AdminLoginForm;
