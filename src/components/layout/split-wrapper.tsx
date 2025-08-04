import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/prose";
import SectionWrapper from "./section-wrapper";

interface SplitWrapperProps {
	sectionHeading: string;
	sectionDescription: string;
	caption: string;
	title?: string;
	description: string;
	children?: ReactNode;
	reverse?: boolean;
	buttons: {
		label: string;
		href: string;
	}[];
}

const LargeSlot = ({ children }: { children: ReactNode }) => (
	<div className="bg-dashed sm:col-span-2">
		<div className="relative">{children}</div>
	</div>
);

const SmallSlot = ({
	caption,
	title,
	description,
	buttons,
}: Pick<
	SplitWrapperProps,
	"caption" | "title" | "description" | "buttons"
>) => (
	<div>
		<div className="flex h-full flex-col items-start justify-between gap-4 border-t p-6 sm:p-8">
			<Prose>
				<small className="text-muted-foreground">{caption}</small>
				{title && (
					<h2 className="not-prose my-2 font-bold text-3xl text-foreground">
						{title}
					</h2>
				)}
				<p className="mt-2">{description}</p>
			</Prose>
			<div className="flex items-center gap-1">
				{buttons.map(({ label, href }, index) => {
					const isExternal = href.startsWith("http");
					return (
						<Button
							key={label}
							asChild
							variant={index ? "link" : "outline"}
							className="gap-2"
						>
							<Link
								href={href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer" : undefined}
							>
								{label}
								{isExternal && (
									<ArrowUpRight className="size-4 text-foreground" />
								)}
							</Link>
						</Button>
					);
				})}
			</div>
		</div>
	</div>
);

const SplitWrapper = ({
	children,
	reverse = false,
	sectionHeading,
	sectionDescription,
	...contentProps
}: SplitWrapperProps) => (
	<SectionWrapper
		heading={sectionHeading}
		description={sectionDescription}
		className="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0"
	>
		{reverse ? (
			<>
				<LargeSlot>{children}</LargeSlot>
				<SmallSlot {...contentProps} />
			</>
		) : (
			<>
				<SmallSlot {...contentProps} />
				<LargeSlot>{children}</LargeSlot>
			</>
		)}
	</SectionWrapper>
);

export default SplitWrapper;
