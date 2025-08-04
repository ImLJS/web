import { Icons } from "@/components/shared/icons";
import { siteMetadata } from "./siteMetadata";

export const socialIcons = [
	{
		title: "Twitter",
		href: "#",
		Icon: Icons.twitter,
	},
	{
		title: "LinkedIn",
		href: "#",
		Icon: Icons.linkedIn,
	},
	{
		title: "GitHub",
		href: siteMetadata.github,
		Icon: Icons.gitHub,
	},
] as const;
