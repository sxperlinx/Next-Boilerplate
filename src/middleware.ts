/* eslint-disable no-console */
import { NextResponse, type NextRequest } from 'next/server';
import App from '@/lib/app.config';

export function middleware(req: NextRequest): NextResponse {
	return App.Middleware.intercept(req);
}

export const config = App.Middleware.matcher;
