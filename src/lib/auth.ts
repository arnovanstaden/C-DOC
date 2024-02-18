'use server';

import { LoginCredentials } from '@types';
import { authPb, pb } from './pocketbase';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const login = async (loginData: LoginCredentials): Promise<void> => {
  await authPb();
  const authData = await pb.collection('users').authWithPassword(loginData.email, loginData.password);
  cookies().set('CDOC_AuthToken', authData.token);
  redirect('/admin');
};
