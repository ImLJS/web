import GitHubActivity from "@/components/common/github";
import HeroLayout from "@/components/layouts/hero-layout";
import Projects from "@/components/projects/project-listing";
import Skills from "@/components/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({
	title: "Projects",
	description: siteMetadata.projectsDescription,
	url: "/projects",
});

const ProjectsPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<HeroLayout caption="Projects" title={siteMetadata.projectsDescription} />
			<Projects />
			<Skills />
			<GitHubActivity />
		</div>
	);
};

export default ProjectsPage;
