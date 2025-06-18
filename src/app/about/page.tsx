import Content from "@/components/about/content";
import Education from "@/components/about/education";
import Facts from "@/components/about/facts";
import Hero from "@/components/about/hero";
import Positions from "@/components/about/positions";
import GitHubActivity from "@/components/home/github";
import Skills from "@/components/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";

const AboutPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero description={siteMetadata.aboutDescription} />
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
