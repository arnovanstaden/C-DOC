import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('CDOC_AuthToken');

  if (!authCookie) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin((?!/login).*)'],
};
