"use client";

import { useAtom } from "jotai";

import Link from "next/link";
import { Hamburger } from "./hamburger";
import { mobileMenuOpen } from "./mobile-nav";

const NavLogo = () => {
	return (
		<Link href="/" aria-label="Home">
			<img className="h-8 w-8" src="/avatar.png" alt="Avatar" />
		</Link>
	);
};

const MobileNavTrigger = () => {
	const [open, setOpen] = useAtom(mobileMenuOpen);
	console.log("Open :: ", open);
	return (
		<nav
			aria-label="Mobile navigation"
			className="flex h-16 items-center justify-between gap-2.5 border-border/50 border-b px-3 md:hidden"
		>
			<NavLogo />
			<Hamburger open={open} onToggle={() => setOpen((o) => !o)} />
		</nav>
	);
};

export default MobileNavTrigger;
