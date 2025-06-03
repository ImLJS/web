import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";
import MobileNavTrigger from "./mobile-nav/mobile-nav-trigger";

const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 bg-blue-500">
			<DesktopNav />
			<MobileNavTrigger />
			<MobileNav />
		</header>
	);
};

export default Navbar;
