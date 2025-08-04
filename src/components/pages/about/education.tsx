import PresidencyLogo from "@/assets/images/presidency.svg";
import StickyWrapper from "@/components/layout/sticky-wrapper";
import { Prose } from "@/components/ui/prose";
import { allEducation } from "@/data/education";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Education = () => (
	<StickyWrapper
		title="Education"
		description="I love learning and I'm always looking for new opportunities to grow."
	>
		{allEducation.map((education, index, array) => {
			return (
				<div
					className={cn(index < array.length - 1 ? "border-b" : "")}
					key={education.id}
				>
					<Link
						href={education.link}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"flex flex-col items-start gap-6 p-6 transition-colors hover:bg-card dark:hover:bg-accent",
							"sm:flex-row sm:p-8",
						)}
					>
						<div className="flex w-16 shrink-0 items-center justify-center pt-2">
							<Image
								src={PresidencyLogo}
								width={48}
								height={48}
								alt="Presidency University Logo"
								style={{ width: "auto", height: "auto" }}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl leading-loose tracking-tight">
								<span className="block leading-tight">{education.title}</span>
								<span className="block font-sans text-lg text-muted-foreground">
									{education.place}
								</span>
							</h2>
							<Prose className="prose-sm">
								<p>{education.description}</p>
							</Prose>
							<p className="text-muted-foreground text-sm">
								{education.start} &mdash;&nbsp;
								{"end" in education && typeof education.end === "string"
									? education.end
									: "Present"}
							</p>
						</div>
					</Link>
				</div>
			);
		})}
	</StickyWrapper>
);

export default Education;
