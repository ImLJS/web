import { cn } from "@/lib/utils";

import SectionWrapper from "@/components/layout/section-wrapper";
import { PROJECTS } from "@/data/projects";
import ProjectThumbnail from "./project-thumbnail";

const Projects = () => {
	return (
		<SectionWrapper className="grid border-t md:grid-cols-2">
			{PROJECTS.map((project, index) => (
				<ProjectThumbnail
					key={project.slug}
					project={{ ...project, tags: [...project.tags] }}
					className={cn(
						index && "border-t",
						index < 2 && "lg:border-t-0",
						index % 2 === 0 && "lg:border-r",
					)}
				/>
			))}
		</SectionWrapper>
	);
};

export default Projects;
