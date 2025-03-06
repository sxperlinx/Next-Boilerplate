import { Metadata, MetadataRoute } from 'next';
import Env from '@/lib/config/env.config';

export default class Meta {
	public static readonly lang = 'en';
	public static readonly metadataBase = new URL(Env.baseUrl);

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
