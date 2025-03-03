import { Children, Element } from '@/lib/types';
import App from '@/lib/app.config';
import '@/ui/css/globals.css';

export const metadata = App.Meta.data;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={App.Meta.lang}>
			<body className={`${App.Typography.font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
