import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { MetadataRoute } from 'next';

export type Children = { children: Readonly<React.ReactNode> };
export type Element = React.JSX.Element;

export type Icon = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, 'ref'> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;

export type Message =
	| { success: string }
	| { error: string }
	| { message: string };

export type Sitemap = MetadataRoute.Sitemap;
export type Robots = MetadataRoute.Robots;
export type Manifest = MetadataRoute.Manifest;

export interface AppData {
	name: string;
	lang: string;
	metadataBase: URL;
	description: string;
	pages: {
		[key: string]: {
			url: string;
			title: string;
		};
	};
}
