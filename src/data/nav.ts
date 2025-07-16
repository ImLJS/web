import {
	FiBox,
	FiCode,
	FiEdit3,
	FiImage,
	FiMessageCircle,
	FiTerminal,
	FiUploadCloud,
} from "react-icons/fi";
import { ROUTES } from "./routes";

export const NAVIGATION = {
	main: [
		{ title: "Home", href: ROUTES.HOME },
		{ title: "About", href: ROUTES.ABOUT },
		{ title: "Projects", href: ROUTES.PROJECTS },
	],

	admin: [
		{ title: "Home", href: ROUTES.HOME },
		{ title: "About", href: ROUTES.ABOUT },
		{ title: "Projects", href: ROUTES.PROJECTS },
		{ title: "Admin", href: ROUTES.ADMIN },
	],

	extra: [
		{ title: "Analytics", href: "#", isExternal: false },
		{ title: "RSS", href: "#", isExternal: false },
		{ title: "Source Code", href: "#", isExternal: false },
	],

	misc: [
		{
			title: "Guestbook",
			href: "#",
			isExternal: false,
			description: "Let everyone know you were here",
			icon: FiMessageCircle,
		},
		{
			title: "Apps",
			href: "#",
			isExternal: false,
			description: "Explore my web apps",
			icon: FiBox,
		},
		{
			title: "Snippets",
			href: "#",
			isExternal: false,
			description: "Explore my code snippets",
			icon: FiCode,
		},
	],

	adminApps: [
		{
			title: "Gallery",
			href: "/admin/gallery",
			isExternal: false,
			description: "Manage your image uploads",
			icon: FiImage,
		},
		{
			title: "File Manager",
			href: "/admin/files",
			isExternal: false,
			description: "Upload and organize your files",
			icon: FiUploadCloud,
		},
		{
			title: "Notes",
			href: "/admin/notes",
			isExternal: false,
			description: "Write and store personal notes",
			icon: FiEdit3,
		},
		{
			title: "Playground",
			href: "/admin/playground",
			isExternal: false,
			description: "Experiment and test new features",
			icon: FiTerminal,
		},
		{
			title: "Guestbook",
			href: "/admin/guestbook",
			isExternal: false,
			description: "Let everyone know you were here",
			icon: FiMessageCircle,
		},
		{
			title: "Snippets",
			href: "/admin/snippets",
			isExternal: false,
			description: "Explore and reuse code snippets",
			icon: FiCode,
		},
	],
};
