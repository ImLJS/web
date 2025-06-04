import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";

const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/90 px-6 py-3 backdrop-blur-md transition-all sm:border-x sm:py-4">
			<DesktopNav />
			<MobileNav />
		</header>
	);
};

export default Navbar;
