import { Element } from '@/lib/types';
import Meta from '@/config/meta';

export default function Home(): Element {
	return (
		<main>
			<h1>{Meta.app.name || 'Next-Boilerplate'}</h1>

			<p>{Meta.app.description}</p>
		</main>
	);
}
