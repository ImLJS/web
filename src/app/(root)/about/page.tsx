import Content from "@/components/pages/about/content";
import Education from "@/components/pages/about/education";
import Facts from "@/components/pages/about/facts";
import Positions from "@/components/pages/about/positions";
import GitHubActivity from "@/components/features/github";
import HeroLayout from "@/components/layout/hero-layout";
import Skills from "@/components/pages/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({
	title: "About",
	description: siteMetadata.aboutDescription,
	url: "/about",
});

const AboutPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<HeroLayout caption="About" title={siteMetadata.aboutDescription} />
			<Content />
			<Positions />
			<Education />
			<Skills />
			<Facts />
			<GitHubActivity />
		</div>
	);
};

export default AboutPage;
