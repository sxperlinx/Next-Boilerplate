import App from '@/lib/app.config';
import { Children, Element } from '@/lib/types'; 
import 'ui/css/globals.css';

export const metadata = App.Meta.data;

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang={App.Meta.lang}>
			<body className={App.Typography.font}>
				{children}
			</body>
		</html>
	);
}
