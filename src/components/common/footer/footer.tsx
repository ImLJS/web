import { EXTRA_NAV, NAV } from "@/data/nav";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import SocialPill from "../social-pill";

type FooterLink = {
	href: string;
	title: string;
	isExternal?: boolean;
};

const footerSections = [
	{
		title: "General",
		links: NAV,
	},
	{
		title: "Projects",
		links: PROJECTS,
	},
	{
		title: "This Site",
		links: EXTRA_NAV,
	},
];

const renderFooterLink = (link: FooterLink) => {
	const linkClass =
		"text-muted-foreground hover:text-foreground transition-colors";

	if (link.isExternal) {
		return (
			<Link
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				className={linkClass}
			>
				{link.title}
			</Link>
		);
	}
	return (
		<Link href={link.href} className={linkClass}>
			{link.title}
		</Link>
	);
};

const Footer = () => {
	return (
		<>
			<div className="relative max-w-7xl border-border/50">
				<section>
					<div className="max-w-6xl divide-y border-t px-4 lg:mx-auto lg:flex lg:divide-y-0 lg:border-t-0 lg:px-4 xl:px-0">
						<div className="flex w-full flex-col py-6 text-sm">
							<div className="flex-grow space-y-6">
								<Link className="inline-block" href="/">
									<Image
										className="h-10 w-10"
										src="/avatar.webp"
										alt="Avatar"
										width={40}
										height={40}
										sizes="40px"
									/>
								</Link>
								<p className="w-60 text-muted-foreground leading-5">
									I&apos;m Leone — a front-end developer, open-source
									contributor, and tech enthusiast. Thanks for stopping by!
								</p>
							</div>
							<div className="mt-6 flex items-center justify-between">
								<div className="flex items-center whitespace-nowrap text-muted-foreground">
									&copy; {new Date().getFullYear()} ImLJS
								</div>
								<div className="flex items-end justify-end">
									<SocialPill />
								</div>
							</div>
						</div>
						<div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
							<div className="flex w-full justify-between ld:space-x-0 md:justify-start md:space-x-36 lg:justify-between">
								{footerSections.map((section) => (
									<div key={section.title}>
										<span className="mb-4 inline-block font-medium text-base text-text-primary">
											{section.title}
										</span>
										<ul className="space-y-2 text-sm">
											{section.links.map((link) => (
												<li key={link.title}>{renderFooterLink(link)}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative h-8 w-full bg-dashed" />
		</>
	);
};

export default Footer;
