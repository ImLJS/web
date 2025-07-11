import BentoLayout from "@/components/layouts/bento-layout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SideProjectsBento = ({ linkTo }: { linkTo?: string }) => {
	return (
		<BentoLayout height="md:h-[304px] lg:h-[200px]" linkTo={linkTo}>
			<div className="group flex h-full items-center justify-between gap-4">
				<div className="flex w-full max-w-[50%] flex-col justify-center">
					<Badge
						variant="outline"
						className={cn(
							"mb-2 w-fit rounded-full border-success text-success",
						)}
					>
						Side Projects
					</Badge>
					<h2 className="mb-2 font-medium text-base">
						Building for Fun & Learning
					</h2>
					<p className="text-muted-foreground text-sm">
						From automation tools to creative UIs — I build side projects to
						explore ideas and improve as a developer.
					</p>
				</div>

				<div className="relative h-[160px] w-full">
					<Image
						src="/projects/temp_project.webp"
						alt="Side Projects Preview"
						fill
						className="rounded-xl object-cover shadow transition-all duration-500 group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</div>
		</BentoLayout>
	);
};

export default SideProjectsBento;
