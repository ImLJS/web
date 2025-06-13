import Hero from "@/components/projects/hero";
import { siteMetadata } from "@/data/siteMetadata";

const ProjectsPage = () => {
	return (
		<div className="relative space-y-16">
			<Hero description={siteMetadata.projectsDescription} />
		</div>
	);
};

export default ProjectsPage;
