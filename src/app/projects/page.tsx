import GitHubActivity from "@/components/home/github";
import HeroLayout from "@/components/layouts/hero-layout";
import Projects from "@/components/projects/projects";
import Skills from "@/components/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";

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
