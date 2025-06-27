import Content from "@/components/about/content";
import Education from "@/components/about/education";
import Facts from "@/components/about/facts";
import Positions from "@/components/about/positions";
import GitHubActivity from "@/components/home/github";
import HeroLayout from "@/components/layouts/hero-layout";
import Skills from "@/components/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: siteMetadata.aboutDescription,
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
