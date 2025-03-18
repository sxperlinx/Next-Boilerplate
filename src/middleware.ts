import { NextResponse, type NextRequest } from 'next/server';
import Middleware from '@/lib/config/middleware.config';

export function middleware(req: NextRequest): NextResponse {
	return Middleware.intercept(req);
}

// export const config = Middleware.matcher;
export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
}
