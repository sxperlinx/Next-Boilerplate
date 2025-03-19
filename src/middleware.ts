import { type NextRequest, NextResponse } from 'next/server';
import Middleware from '@/config/middleware';

export function middleware(req: NextRequest): NextResponse {
	return Middleware.intercept(req);
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)',
	],
};
