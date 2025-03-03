import { MetadataRoute } from 'next';
import App from '@/lib/app.config';

export default function sitemap(): MetadataRoute.Sitemap {
	return App.Meta.sitemap;
}
