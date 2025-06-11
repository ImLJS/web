import BentoLayout from "@/components/layouts/bento-layout";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { allSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

const TechStackBento = ({ linkTo }: { linkTo?: string }) => {
	return (
		<BentoLayout height="md:h-[304px] lg:h-[230px]" linkTo={linkTo}>
			<div className="group flex h-full flex-col justify-around">
				<div>
					<Badge
						variant="outline"
						className={cn(
							"mb-2 w-fit rounded-full border-success text-success",
						)}
					>
						Tech Stack
					</Badge>
					<h2 className="mb-2 font-medium text-base">Tools I Use</h2>
					<p className="pr-4 text-muted-foreground text-sm">
						Some of the technologies I use regularly to build performant,
						scalable web apps.
					</p>
				</div>
				<div className="relative mt-2 w-full">
					<Marquee pauseOnHover className="h-[48px]">
						{allSkills.map(({ name, icon: Icon, link }) => (
							<div
								key={name}
								title={name}
								className="mx-3 flex items-center justify-center transition-transform hover:scale-110"
							>
								<Icon
									className={cn(
										"h-6 w-6 md:h-8 md:w-8",
										"grayscale filter transition-all duration-300 hover:grayscale-0",
									)}
								/>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</BentoLayout>
	);
};

export default TechStackBento;
