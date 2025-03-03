import App from '@/lib/app.config';
import { MetaDataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return App.Meta.sitemap;
}