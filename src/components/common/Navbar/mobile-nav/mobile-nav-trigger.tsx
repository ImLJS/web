"use client";

import { useAtom } from "jotai";

import { Hamburger } from "./hamburger";
import { mobileMenuOpen } from "./mobile-nav";

const MobileNavTrigger = () => {
	const [open, setOpen] = useAtom(mobileMenuOpen);

	return <Hamburger open={open} onToggle={() => setOpen((o) => !o)} />;
};

export default MobileNavTrigger;
