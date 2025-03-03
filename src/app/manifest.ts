import App from '@/lib/app.config';
import { Manifest } from '@/lib/types';

export default function manifest(): Manifest {
	return App.Meta.manifest;
}
