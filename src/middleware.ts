import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Extract the current path and token from cookies
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value || ''; // Assuming token is stored in cookies

  console.log('Token:', token);
  console.log('Pathname:', pathname);

  // Define protected paths for users
  const userProtectedPaths = ['/cart', '/cart/checkout', '/orders', '/profile'];
  const authPaths = ['/auth/login', '/auth/register'];

  const isUserProtectedRoute = userProtectedPaths.some(path =>
    pathname.startsWith(path)
  );
  const isAuthPath = authPaths.some(path => pathname.startsWith(path));

  console.log('isUserProtectedRoute:', isUserProtectedRoute);
  console.log('isAuthPath:', isAuthPath);

  // Redirect to login if user is not logged in and trying to access user protected routes
  if (isUserProtectedRoute && !token) {
    const redirectUrl = new URL(`/auth/login`, req.url);
    redirectUrl.searchParams.set('callbackUrl', req.url); // Pass the intended URL as callbackUrl
    console.log('Redirecting to login:', redirectUrl.toString());
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect to home if user is logged in and trying to access login or register
  if (isAuthPath && token) {
    console.log('Redirecting to home');
    return NextResponse.redirect(new URL('/', req.url));
  }

  // If token exists or the route is not protected, continue
  return NextResponse.next();
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ['/cart/:path*', '/profile/:path*', '/admin/:path*', '/auth/login', '/auth/register', '/orders/:path*'] // Apply middleware to cart, profile, admin, login, register, and orders paths
};