import App from '@/lib/app.config';
import { Sitemap } from '@/lib/types';

export default function sitemap(): Sitemap {
	return App.Meta.sitemap;
}
