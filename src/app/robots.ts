import { MetadataRoute } from 'next';
import Meta from '@/config/meta';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/'],
		},
		sitemap: `${Meta.app.metadataBase.origin}/sitemap.xml`,
		// Add more robots rules here.
	};
}
