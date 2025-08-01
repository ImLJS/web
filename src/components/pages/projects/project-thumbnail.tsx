import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/ui/prose";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export type Project = {
	slug: string;
	title: string;
	description: string;
	href: string;
	icon: React.ComponentType;
	tags: string[];
	image: StaticImageData;
	archived: boolean;
	featured: boolean;
};

interface ProjectThumbnailProps {
	readonly project: Project;
	readonly className?: string;
}

const ProjectThumbnail = ({ project, className }: ProjectThumbnailProps) => (
	<Link href={project.href} key={project.slug}>
		<article
			className={cn(
				"flex h-full flex-col justify-between gap-8 bg-background px-6 pt-6 transition-colors hover:bg-card dark:hover:bg-accent",
				"lg:px-8 lg:pt-8",
				className,
			)}
		>
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between gap-2">
					<h2 className="font-bold text-2xl">{project.title}</h2>
					<Badge
						variant="outline"
						className={cn(
							"rounded-full",
							!project.archived && "border-success text-success",
							project.archived && "border-warning text-warning",
						)}
					>
						{project.archived ? "Archived" : "Active"}
					</Badge>
				</div>
				<Prose>
					<p className="text-pretty leading-normal">{project.description}</p>
				</Prose>

				<div className="flex flex-wrap gap-1.5">
					{project.tags.map((tag) => (
						<Badge
							key={tag}
							variant="outline"
							className="rounded-full text-muted-foreground"
						>
							{tag}
						</Badge>
					))}
				</div>
			</div>
			<div className="relative aspect-video overflow-hidden rounded-t-lg border-x border-t">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</article>
	</Link>
);

export default ProjectThumbnail;
