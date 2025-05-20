import { MetadataRoute } from 'next';
import Meta from '@/config/meta';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: Meta.app.metadataBase.origin,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 1,
		},
		// Add more sitemap routes here.
	];
}
