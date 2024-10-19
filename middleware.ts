import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken'

export function middleware(req: NextRequest) {
  // Extract the current path and token from cookies or session
  const { pathname } = req.nextUrl
  const token = req.cookies.get('token')?.value || '' // Assuming token is stored in cookies

  let userRole = 'guest' // Default role

  if (token) {
    try {
      // const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as { role: string }
      // userRole = decodedToken.role
    } catch (error) {
      console.error('Invalid token:', error)
    }
  }

  // Define protected paths for users and admins
  const userProtectedPaths = ['/cart', '/profile']
  const adminProtectedPaths = ['/admin', '/admin/*']

  const isUserProtectedRoute = userProtectedPaths.some(path =>
    pathname.startsWith(path)
  )
  const isAdminProtectedRoute = adminProtectedPaths.some(path =>
    pathname.startsWith(path)
  )

  // Redirect to login if user is not logged in and trying to access user protected routes
  if (isUserProtectedRoute && userRole === 'guest') {
    const redirectUrl = new URL(`/login`, req.url)
    redirectUrl.searchParams.set('callbackUrl', req.url) // Pass the intended URL as callbackUrl
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect to login if user is not an admin and trying to access admin protected routes
  if (isAdminProtectedRoute && userRole !== 'admin') {
    const redirectUrl = new URL(`/login`, req.url)
    redirectUrl.searchParams.set('callbackUrl', req.url) // Pass the intended URL as callbackUrl
    return NextResponse.redirect(redirectUrl)
  }

  // If token exists or the route is not protected, continue
  return NextResponse.next()
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ['/cart/:path*', '/profile/:path*', '/admin/:path*'] // Apply middleware to cart, profile, and admin paths
}
