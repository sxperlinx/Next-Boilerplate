import App from '@/lib/app.config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return App.Meta.robots;
}