import { NextResponse, type NextRequest } from 'next/server';
import Middleware from '@/lib/config/middleware.config';

export function middleware(req: NextRequest): NextResponse {
	return Middleware.intercept(req);
}

export const config = Middleware.matcher;
