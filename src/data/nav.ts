import { ROUTES } from "./routes";

export const NAV = [
	{ title: "Home", href: ROUTES.HOME },
	{ title: "About", href: ROUTES.ABOUT },
	{ title: "Projects", href: ROUTES.PROJECTS },
];

// This is a list of extra navigation links that are not part of the main site navigation.
// Will Change isExternal to true when the external links are added.
export const EXTRA_NAV = [
	{ title: "Analytics", href: "#a", isExternal: false },
	{ title: "RSS", href: "#b", isExternal: false },
	{ title: "Source Code", href: "#c", isExternal: false },
];
