import { Sitemap, Robots, Manifest } from '@/lib/types';
import { Metadata } from 'next';
import Env from '@/config/env';
export default class Meta {
	static readonly app = {
		name: 'Next-Boilerplate',
		lang: 'en',
		metadataBase: new URL(Env.baseUrl),
		description: 'Next boilerplate template',
	};

	private static readonly title = {
		template: `%s | ${this.app.name}`,
		default: this.app.name,
	};

	public static readonly data: Metadata = {
		title: this.title,
		description: this.app.description,
		metadataBase: this.app.metadataBase,
		// Add more metadata here.
	};

	public static readonly sitemap: Sitemap = [
		{
			url: this.app.metadataBase.origin,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 1,
		},
		// Add more sitemap routes here.
	];

	public static readonly robots: Robots = {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/'],
		},
		sitemap: `${this.app.metadataBase.origin}/sitemap.xml`,
		// Add more robots rules here.
	};

	public static readonly manifest: Manifest = {
		name: 'Next-Boilerplate',
		short_name: 'Boilerplate',
		description: 'Next boilerplate',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/icon/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/icon/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
