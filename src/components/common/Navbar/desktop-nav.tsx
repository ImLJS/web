"use client";

import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialPill } from "../social-pill";

type NavLinkType = {
	link: string;
	name: string;
};

const DesktopNav = () => {
	const NavLink = ({ name, link }: NavLinkType) => {
		const isActive = usePathname() === link;

		return (
			<li key={name}>
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
			</li>
		);
	};

	return (
		<nav
			aria-label="Desktop navigation"
			className="hidden h-16 w-full items-center justify-between border-border/50 border-b px-4 md:flex"
		>
			<div className="w-[104px]">
				<Link href="/" aria-label="Home">
					<img className="h-6 w-6" src="/avatar.png" alt="Avatar" />
				</Link>
			</div>
			<ul className="flex place-items-center space-x-4 rounded-full border px-5 py-2 text-muted-foreground text-sm">
				{NAV.map((link) => (
					<NavLink {...link} key={link.link} />
				))}
			</ul>
			<SocialPill />
		</nav>
	);
};

export default DesktopNav;
