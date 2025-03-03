import App from '@/lib/app.config';
import { Robots } from '@/lib/types';

export default function robots(): Robots {
	return App.Meta.robots;
}
