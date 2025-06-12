import { PROJECTS } from "@/data/projects";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import BentoLayout from "../layouts/bento-layout";
import SectionWrapper from "../layouts/section-wrapper";

type FeaturedProjectCardProps = {
	project: {
		slug: string;
		title: string;
		description: string;
		href: string;
		tags: readonly string[];
		image: StaticImageData;
	};
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
	return (
		<BentoLayout linkTo={project.href} height="h-[276px]">
			<div className="flex h-full flex-col gap-8">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="rounded-3xl p-4"
				/>
				<div className="z-50 flex h-full flex-col justify-end">
					<h2 className="mb-2 font-medium">{project.title}</h2>
					<p className="text-muted-foreground text-sm">{project.description}</p>
				</div>
			</div>
		</BentoLayout>
	);
};

const FeaturedProjects = () => {
	return (
		<SectionWrapper
			heading="Featured Projects"
			description="Some highlights from my development journey."
		>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				{PROJECTS.filter((project) => project.featured).map((project) => (
					<FeaturedProjectCard key={project.slug} project={project} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default FeaturedProjects;
