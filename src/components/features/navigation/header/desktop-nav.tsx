"use client";

import AvatarPic from "@/assets/images/avatar.webp";
import SocialPill from "@/components/shared/social-pill";
import { NAVIGATION } from "@/data/nav";
import { cn } from "@/lib/utils";
import { useSession } from "@/server/auth/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavTrigger } from "./mobile-nav";

type NavLinkType = {
	title: string;
	href: string;
};

const NavLink = ({ title, href }: NavLinkType) => {
	const pathname = usePathname();

	const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			prefetch={true}
			className={cn(
				"font-medium",
				isActive
					? "text-foreground"
					: "text-muted-foreground hover:text-foreground",
			)}
		>
			{title}
		</Link>
	);
};

const DesktopNav = () => {
	const { data: session } = useSession();
	const NAV_DATA = session?.user ? NAVIGATION.admin : NAVIGATION.main;

	return (
		<>
			<div className="w-32">
				<Link href="/" aria-label="Avatar">
					<Image src={AvatarPic} width={32} height={32} alt="Avatar" priority />
				</Link>
			</div>
			<nav className="hidden space-x-4 rounded-full border bg-card px-5 py-2 text-xs md:flex">
				{NAV_DATA.map((link) => (
					<NavLink {...link} key={link.href} />
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
