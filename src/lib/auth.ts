'use server';

import { LoginCredentials } from '@types';
import { authPb, pb } from './pocketbase';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as jwt from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const jwtSecretKey = process.env.JWT_SECRET_KEY;

if (!jwtSecretKey) {
  console.error('JWT_SECRET_KEY environment variable is not set.');
  process.exit(1); // Exit the application if the secret key is not set
}

export const createJwtToken = async (): Promise<string> => {
  const encoder = new TextEncoder();
  const token = await new jwt.SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h') // Set expiration time to 2 hours
    .sign(encoder.encode(jwtSecretKey.toString()));

  return token;
};

export const verifyJwtToken = async (token: string): Promise<boolean> => {
  const encoder = new TextEncoder();
  try {
    await jwt.jwtVerify(token, encoder.encode(jwtSecretKey.toString()));
    return true;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return false;
  }
};

export const login = async (loginData: LoginCredentials): Promise<void> => {
  await authPb();
  await pb.collection('users').authWithPassword(loginData.email, loginData.password);

  const jwtToken = await createJwtToken();
  cookies().set('CDOC_Auth_Token', jwtToken);
  redirect('/admin');
};

export const initLogoutFlow = (req: NextRequest): NextResponse => {
  const response = NextResponse.redirect(new URL('/admin/login', req.url));
  response.cookies.delete('CDOC_Auth_Token');
  return response;
};