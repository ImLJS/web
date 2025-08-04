import GitHubActivity from "@/components/features/github";
import About from "@/components/pages/home/about";
import FeaturedProject from "@/components/pages/home/featured-project";
import Hero from "@/components/pages/home/hero";
import Misc from "@/components/pages/home/misc";
import MySite from "@/components/pages/home/my-site";
import { siteMetadata } from "@/data/siteMetadata";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({
	title: "Home",
	description: siteMetadata.homeDescription,
	url: "/",
});

const page = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero />
			<About />
			<FeaturedProject />
			<GitHubActivity />
			<MySite />
			<Misc />
		</div>
	);
};

export default page;
