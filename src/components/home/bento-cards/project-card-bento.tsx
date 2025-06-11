import BentoLayout from "@/components/layouts/bento-layout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardBentoProps {
	title: string;
	description: string;
	imageUrl: string;
	linkTo?: string;
}

const ProjectCardBento = ({
	title,
	description,
	imageUrl,
	linkTo,
}: ProjectCardBentoProps) => {
	return (
		<BentoLayout height="h-[250px]" linkTo={linkTo}>
			<div className="group grid h-full grid-rows-2">
				<div className="flex flex-col pr-3 text-left">
					<Badge
						variant="outline"
						className={cn(
							"mb-2 w-fit rounded-full border-success text-success",
						)}
					>
						Featured Project
					</Badge>
					<h2 className="mb-2 font-medium text-base">{title}</h2>
					<p className="text-muted-foreground text-sm">{description}</p>
				</div>
				<div className="relative w-full">
					<div
						className="rounded-[20px] border p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
						style={{ width: "100%", height: "200px" }}
					>
						<div
							className="grid h-full place-items-center rounded-xl border-2 border-border/10 bg-muted"
							style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
						/>
					</div>
					<img
						className="absolute top-5 left-0 h-[200px] w-full rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
						src={imageUrl}
						alt={`${title} preview`}
					/>
				</div>
			</div>
		</BentoLayout>
	);
};

export default ProjectCardBento;
