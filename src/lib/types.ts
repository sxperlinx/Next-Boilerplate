import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { MetadataRoute } from 'next';

export type Children = { children: Readonly<React.ReactNode> };
export type Ref = React.RefObject<HTMLElement>;
export type RefCallback = (node: HTMLElement) => void;

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant:
		| 'secondary'
		| 'default'
		| 'link'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| null
		| undefined;
	size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
	label: string;
}

export interface SubmitButtonProps extends ButtonProps {
	pendingText?: string;
}

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	type: 'submit' | 'button' | undefined;
}

export interface FormItemProps
	extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
	label: string;
}

export type Icon = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, 'ref'> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;
export type NavLink = {
	name: string;
	href: string;
	icon: Icon;
};

export type Message =
	| { success: string }
	| { error: string }
	| { message: string };

export type Sitemap = MetadataRoute.Sitemap;
export type Robots = MetadataRoute.Robots;
export type Manifest = MetadataRoute.Manifest;
export type Element = React.JSX.Element;

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
