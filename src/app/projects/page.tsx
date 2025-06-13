import Hero from "@/components/projects/hero";
import Projects from "@/components/projects/projects";
import { siteMetadata } from "@/data/siteMetadata";

const ProjectsPage = () => {
	return (
		<div className="relative space-y-16">
			<Hero description={siteMetadata.projectsDescription} />
			<Projects />
		</div>
	);
};

export default ProjectsPage;
