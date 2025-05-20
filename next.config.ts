// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import type { NextConfig } from 'next';
import Env from '@/config/env';

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase: unknown): NextConfig => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;

	const nextConfig: NextConfig = {
		allowedDevOrigins: [
			'http://localhost:3000',
			Env.get('NEXT_PUBLIC_DEV_ORIGIN'),
		],
		logging: isDev
			? {
					fetches: {
						fullUrl: true,
						hmrRefreshes: true,
					},
					incomingRequests: true,
				}
			: false,
		devIndicators: false,
		distDir: 'dist',
		experimental: {
			cssChunking: true,
		},
	};
	return nextConfig;
};
