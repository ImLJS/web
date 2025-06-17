import Link from "next/link";
import ThemeToggle from "./header/theme-toggle";
import { Icons } from "./icons";
import Search from "./search";

export function SocialPill() {
	return (
		<div className="z-30 flex items-center justify-center gap-2 rounded-full bg-dark px-4 py-1">
			<Search />
			<ThemeToggle />
			<Link
				href="#link"
				title="Twitter"
				className="flex items-center justify-center"
			>
				<Icons.twitter className="h-6 w-6 text-paper opacity-50 hover:opacity-100" />
				<span className="sr-only">Twitter</span>
			</Link>

			<Link
				href="#link"
				title="LinkedIn"
				className="flex items-center justify-center"
			>
				<Icons.linkedIn className="h-6 w-6 text-paper opacity-50 hover:opacity-100" />
				<span className="sr-only">LinkedIn</span>
			</Link>

			<Link
				href="#link"
				title="GitHub"
				className="flex items-center justify-center"
			>
				<Icons.gitHub className="h-6 w-6 text-paper opacity-50 hover:opacity-100" />
				<span className="sr-only">GitHub</span>
			</Link>
		</div>
	);
}
