import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // Extract the current path and token from cookies or session
  const { pathname } = req.nextUrl
  const token = req.cookies.get('token')?.value || '' // Assuming token is stored in cookies

  // If the user is not logged in (no token) and they are trying to access restricted routes
  const protectedPaths = ['/cart', '/profile']
  const isProtectedRoute = protectedPaths.some(path =>
    pathname.startsWith(path)
  )

  if (isProtectedRoute && !token) {
    // Save the intended URL to redirect the user back after login
    const redirectUrl = new URL(`/login`, req.url)
    redirectUrl.searchParams.set('callbackUrl', req.url) // Pass the intended URL as callbackUrl

    // Redirect to login page
    return NextResponse.redirect(redirectUrl)
  }

  // If token exists or the route is not protected, continue
  return NextResponse.next()
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ['/cart/:path*', '/profile/:path*'] // Apply middleware to cart and profile paths
}
