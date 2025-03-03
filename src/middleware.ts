import { NextResponse, type NextRequest } from 'next/server';
import App from '@/lib/app.config';

export function middleware(req: NextRequest): NextResponse {
	console.log(`Middleware intercepted at ${req.url}`);

	const origin = req.headers.get('origin') ?? '';
	const isAllowedOrigin = App.Cors.allowedOrigins.includes(origin);
	const isPreflight = req.method === 'OPTIONS';

	if (isPreflight) {
		const preflightHeaders = {
			...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
			...App.Cors.corsOptions,
		};
		return NextResponse.json({}, { headers: preflightHeaders });
	}

	const res = NextResponse.next();

	if (isAllowedOrigin) {
		res.headers.set('Access-Control-Allow-Origin', origin);
	}

	Object.entries(App.Cors.corsOptions).forEach(([key, value]) => {
		res.headers.set(key, value);
	});

	return res;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
