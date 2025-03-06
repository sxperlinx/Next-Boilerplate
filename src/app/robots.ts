import Meta from '@/lib/config/meta.config';
import { Robots } from '@/lib/types';

export default function robots(): Robots {
	return Meta.robots;
}
