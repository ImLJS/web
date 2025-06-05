"use client";

import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialPill } from "../social-pill";
import Image from "next/image";
import { MobileNavTrigger } from "./mobile-nav";

type NavLinkType = {
	link: string;
	name: string;
};

const NavLink = ({ name, link }: NavLinkType) => {
	const isActive = usePathname() === link;

	return (
		<Link
			href={link}
			prefetch={true}
			className={cn(
				"font-medium",
				isActive
					? "text-foreground"
					: "text-muted-foreground hover:text-foreground",
			)}
		>
			{name}
		</Link>
	);
};

const DesktopNav = () => {
	return (
		<>
			<div className="w-32">
				<Link href="/" aria-label="Avatar">
					<Image src={"/avatar.png"} width={32} height={32} alt="Avatar" />
				</Link>
			</div>
			<nav className="hidden space-x-4 rounded-full border bg-card px-5 py-2 text-sm md:flex">
				{NAV.map((link) => (
					<NavLink {...link} key={link.link} />
				))}
			</nav>
			<div className="hidden w-32 justify-end md:flex">
				<SocialPill />
			</div>
			<div className="flex w-32 justify-end md:hidden">
				<MobileNavTrigger />
			</div>
		</>
	);
};

export default DesktopNav;
