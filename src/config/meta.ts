import { AppData } from '@/lib/types';
import { Metadata } from 'next';
import Env from '@/config/env';

export default class Meta {
	static readonly title = 'Next-Boilerplate';

	static readonly app: AppData = {
		name: Meta.title,
		lang: 'en',
		metadataBase: new URL(Env.baseUrl),
		description: 'Next boilerplate template',
		pages: {
			home: {
				url: '/',
				title: `Home | ${Meta.title}`,
			},
			api: {
				url: '/api',
				title: 'API',
			},
		},
	};

	public static readonly data: Metadata = {
		title: {
			template: `%s | ${this.app.name}`,
			default: this.app.name,
		},
		description: this.app.description,
		metadataBase: this.app.metadataBase,
		applicationName: this.app.name,
		// Add more metadata here.
	};
}
