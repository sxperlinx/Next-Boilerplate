import { Children, Element } from '@/lib/types';

export default function Card({ children }: Children): Element {
	return <div>{children}</div>;
}
