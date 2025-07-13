import { ROUTES } from "./routes";

export const NAV = [
	{ title: "Home", href: ROUTES.HOME },
	{ title: "About", href: ROUTES.ABOUT },
	{ title: "Projects", href: ROUTES.PROJECTS },
];

export const ADMIN_NAV = [
	...NAV,
	{ title: "Dashboard", href: ROUTES.DASHBOARD },
	{ title: "Manage", href: ROUTES.MANAGE },
];

// This is a list of extra navigation links that are not part of the main site navigation.
// Will Change isExternal to true when the external links are added.
export const EXTRA_NAV = [
	{ title: "Analytics", href: "#", isExternal: false },
	{ title: "RSS", href: "#", isExternal: false },
	{ title: "Source Code", href: "#", isExternal: false },
];

export const MISC_NAV = [
	{
		title: "Guestbook",
		href: ROUTES.GUESTBOOK,
		isExternal: false,
		description: "Let everyone know you were here",
	},
	{
		title: "Apps",
		href: ROUTES.APP,
		isExternal: false,
		description: "Explore my web apps",
	},
	{
		title: "Snippets",
		href: ROUTES.SNIPPETS,
		isExternal: false,
		description: "Explore my code snippets",
	},
];
