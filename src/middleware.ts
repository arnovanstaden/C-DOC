import { verifyJwtToken } from '@lib/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = async (req: NextRequest): Promise<NextResponse> => {
  const authCookie = req.cookies.get('CDOC_Auth_Token');

  if (!authCookie) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
  const isAuthenticated = await verifyJwtToken(authCookie.value);
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }


  return NextResponse.next();
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin((?!/login).*)'],
};
