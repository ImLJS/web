import { buttonVariants } from "@/components/ui/button";
import { allSkills } from "@/data/skills";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionWrapper from "@/components/layout/section-wrapper";

const Skills = () => (
	<SectionWrapper
		heading="Skills"
		description="My stack and favorite tools"
		className={cn("flex flex-col gap-8")}
	>
		<div className="flex flex-wrap items-center justify-center gap-1.5 border-t p-6 sm:gap-2.5 md:p-8">
			{allSkills.map((skill, index) => (
				<Link
					key={index}
					href={skill.link}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"rounded-full font-light text-xs",
					)}
				>
					<skill.icon
						className={cn("size-4", "className" in skill && skill.className)}
					/>
					{skill.name}
				</Link>
			))}
		</div>
	</SectionWrapper>
);

export default Skills;
