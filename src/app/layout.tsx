import { Element, Children } from '@/lib/types';
import Typography from '@/config/typography';
import Meta from '@/config/meta';
import '@/ui/css/globals.css';

export const metadata = Meta.data;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={Meta.app.lang}>
			<body className={`${Typography.font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
