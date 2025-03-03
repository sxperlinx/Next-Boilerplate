import type { MetadataRoute } from 'next';
import App from '@/lib/app.config';

export default function manifest(): MetadataRoute.Manifest {
	return App.Meta.manifest;
}
