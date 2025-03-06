import { type NextRequest, NextResponse } from 'next/server';
import Cors from '@/lib/config/cors.config';

export default class Middleware {
	public static readonly matcher = {
		matcher: [
			'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
		],
	};

	public static intercept(req: NextRequest): NextResponse {
		const origin = req.headers.get('origin') ?? '';
		const isAllowedOrigin = Cors.allowedOrigins.includes(origin);
		const isPreflight = req.method === 'OPTIONS';

		if (isPreflight) {
			const preflightHeaders = {
				...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
				...Cors.corsOptions,
			};
			return NextResponse.json({}, { headers: preflightHeaders });
		}

		const res = NextResponse.next();

		if (isAllowedOrigin) {
			res.headers.set('Access-Control-Allow-Origin', origin);
		}

		Object.entries(Cors.corsOptions).forEach(([key, value]) => {
			res.headers.set(key, value);
		});

		return res;
	}
}
