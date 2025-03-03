import App from '@/lib/app.config';
import type { MetadataRoute } from 'next';
 
export default function manifest(): MetadataRoute.Manifest {
  return App.Meta.manifest;
}