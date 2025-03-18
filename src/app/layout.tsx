import Typography from '@/lib/config/typography.config';
import Meta from '@/lib/config/meta.config';
import { Children } from '@/lib/props';
import { Element } from '@/lib/types';
import '@/ui/css/globals.css';

export const metadata = Meta.data;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={Meta.lang}>
			<body className={`${Typography.font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
