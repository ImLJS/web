import GitHubActivity from "@/components/home/github";
import Hero from "@/components/projects/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/projects/skills";
import { siteMetadata } from "@/data/siteMetadata";

const ProjectsPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero description={siteMetadata.projectsDescription} />
			<Projects />
			<Skills />
			<GitHubActivity />
		</div>
	);
};

export default ProjectsPage;
