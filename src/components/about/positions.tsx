import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Prose } from "@/components/ui/prose";
import { allPositions } from "@/data/experience";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionWrapper from "../layouts/section-wrapper";

const Positions = () => (
	<SectionWrapper
		className="grid lg:grid-cols-2"
		heading="Work Experience"
		description="Crafting web apps through real-world experience."
	>
		{allPositions.map((position, index, array) => (
			<div
				className={cn(
					index % 2 === 0 ? "sm:border-r" : "",
					index < array.length - 2 ? "border-b" : "",
				)}
				key={position.id}
			>
				<Link
					href={position.link}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"flex h-full flex-col items-start gap-6 border-t p-6 transition-colors hover:bg-card dark:hover:bg-accent",
						"sm:p-8 lg:flex-row",
					)}
				>
					<div className="flex w-16 shrink-0 items-center justify-center">
						<Image
							src={position.icon}
							alt={position.company}
							width={128}
							height={128}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="font-semibold text-xl leading-loose tracking-tight">
							<span className="block leading-tight">{position.position}</span>
							<span className="block font-sans text-lg text-muted-foreground">
								{position.company}
							</span>
						</h2>
						<Prose className="prose-sm">
							<p>{position.description}</p>
						</Prose>
						<p className="text-muted-foreground text-sm">
							{position.type} &bull; {position.start} &mdash;&nbsp;
							{"end" in position && typeof position.end === "string"
								? position.end
								: "Present"}
						</p>
					</div>
				</Link>
			</div>
		))}
		{allPositions.length % 2 && (
			<div className="hidden flex-col items-center justify-center gap-6 border-t bg-dashed p-8 lg:flex">
				<h2 className="text-center font-semibold text-3xl">
					Want to build together?
				</h2>
				<Link href="#contact" className={buttonVariants()}>
					Let&apos;s talk about work
				</Link>
			</div>
		)}
	</SectionWrapper>
);

export default Positions;
