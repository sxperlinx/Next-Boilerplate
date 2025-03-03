import { satoshi } from '@/ui/typography/fonts';
import { Metadata, MetadataRoute } from 'next';
// import '@/lib/env.config.ts';

/**
 * App configuration.
 * This class includes all the configurations for the app.
 *
 * **Inner classes:**
 * - `Cors`: CORS configuration.
 * - `Typography`: Typography configuration.
 * - `Env`: Environment configuration.
 * - `Meta`: Metadata configuration.
 *
 * @class App
 * @static
 * @public
 */
export default class App {
	public static readonly Cors = class {
		public static readonly allowedOrigins = ['*']; // Change to your domain
		public static readonly corsOptions = {
			'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Max-Age': '86400', // 24 hours
		};
		// Add more CORS options here.
	};

	public static readonly Typography = class {
		public static readonly font = satoshi;
		// Add more typography options here.
	};

	public static readonly Env = class {
		public static readonly nodeEnv = process.env.NODE_ENV
			? process.env.NODE_ENV
			: 'development';
		public static readonly isDev = this.nodeEnv === 'development';
		public static readonly isProd = this.nodeEnv === 'production';
		public static readonly baseUrl = this.isDev
			? 'http://localhost:3000'
			: process.env.NEXT_PUBLIC_BASE_URL!;
		// Add more environment variables here.
	};

	public static readonly Meta = class {
		public static readonly lang = process.env.NEXT_PUBLIC_LANG!
			? process.env.NEXT_PUBLIC_LANG!
			: 'en';
		public static readonly metadataBase = new URL(App.Env.baseUrl);
		private static readonly title = {
			template: '%s | Next-Boilerplate',
			default: 'Next-Boilerplate',
		};

		private static readonly description = 'Next boilerplate template';

		public static readonly data: Metadata = {
			title: this.title,
			description: this.description,
			metadataBase: this.metadataBase,
			// Add more metadata here.
		};

		public static readonly sitemap: MetadataRoute.Sitemap = [
			{
				url: this.metadataBase.origin,
				lastModified: new Date(),
				changeFrequency: 'never',
				priority: 1,
			},
			// Add more sitemap routes here.
		];

		public static readonly robots: MetadataRoute.Robots = {
			rules: {
				userAgent: '*',
				allow: '/',
				disallow: ['/api/'],
			},
			sitemap: `${this.metadataBase.origin}/sitemap.xml`,
			// Add more robots rules here.
		};

		public static readonly manifest: MetadataRoute.Manifest = {
			name: 'Next-Boilerplate',
			short_name: 'Boilerplate',
			description: 'Next boilerplate',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#000000',
			icons: [
				{
					src: '/icon-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
			// Add more manifest options here.
		};
	};
}
