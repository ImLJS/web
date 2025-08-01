"use client";

import { socialIcons } from "@/data/social-icons";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogOut from "./log-out";
import ThemeToggle from "./theme-toggle";

type SocialLinkProps = {
	href: string | undefined;
	title: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SocialLinks = ({ href, title, Icon }: SocialLinkProps) => {
	return (
		<Link
			href={href || "#"}
			title={title}
			className="flex items-center justify-center"
		>
			<Icon className="h-6 w-6 text-paper opacity-50 hover:opacity-100" />
			<span className="sr-only">{title}</span>
		</Link>
	);
};

const SocialPill = () => {
	const { data: session } = useSession();
	const pathname = usePathname();

	const isSignedIn = !!session?.user;
	const isOnAdminPage = pathname.startsWith("/admin");
	const shouldShowLogout = isSignedIn && isOnAdminPage;

	return (
		<div className="z-30 flex items-center justify-center gap-2 rounded-full bg-dark px-4 py-1">
			{shouldShowLogout && <LogOut />}
			<ThemeToggle />
			{socialIcons.map((social) => (
				<SocialLinks key={social.title} {...social} />
			))}
		</div>
	);
};

export default SocialPill;
