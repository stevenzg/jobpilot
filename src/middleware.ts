import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 需要认证的路由
const protectedRoutes = ['/jobs', '/onboarding']
// 不需要认证的路由
const publicRoutes = ['/', '/login']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // 如果是受保护的路由且没有token，重定向到首页
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 如果已经有token且访问登录页，重定向到jobs页面
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/jobs', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
