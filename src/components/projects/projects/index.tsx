import { cn } from "@/lib/utils";

import { PROJECTS } from "@/data/projects";
import ProjectThumbnail from "./thumbnail";
import SectionWrapper from "@/components/layouts/section-wrapper";

const Projects = () => {
	return (
		<SectionWrapper
			className="grid md:grid-cols-2 border-t"
			heading="Projects"
			description="Personal builds and creative experiments."
		>
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
