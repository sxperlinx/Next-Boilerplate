import Typography from '@/lib/config/typography.config';
import { Children, Element } from '@/lib/types';
import Meta from '@/lib/config/meta.config';
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
