import NavLinks from '@/ui/components/navigation/nav-links';

export default function SideNav() {
	return (
		<nav>
			<div>{/* @TODO: Logo */}</div>
			<div>
				<NavLinks />
			</div>
			<div>{/* @TODO: Footer action */}</div>
		</nav>
	);
}
