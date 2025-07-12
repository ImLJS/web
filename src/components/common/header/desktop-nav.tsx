"use client";

import { ADMIN_NAV, NAV } from "@/data/nav";
import { checkIsAdminClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialPill from "../social-pill";
import { MobileNavTrigger } from "./mobile-nav";

type NavLinkType = {
	title: string;
	href: string;
};

const NavLink = ({ title, href }: NavLinkType) => {
	const isActive = usePathname() === href;

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
	const isAdmin = checkIsAdminClient();

	const NAV_DATA = isAdmin ? ADMIN_NAV : NAV;
	return (
		<>
			<div className="w-32">
				<Link href="/" aria-label="Avatar">
					<Image
						src={"/avatar.webp"}
						width={32}
						height={32}
						alt="Avatar"
						priority
					/>
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
