import { MetadataRoute } from 'next';
import App from '@/lib/app.config';

export default function robots(): MetadataRoute.Robots {
	return App.Meta.robots;
}
