import { cn } from "@/lib/utils";
import { Prose } from "../ui/prose";

import type { ReactNode } from "react";
import SectionWrapper from "./section-wrapper";

interface StickyWrapperProps {
	title: string;
	description?: string;
	children: ReactNode;
}

const StickyWrapper = ({
	title,
	description,
	children,
}: StickyWrapperProps) => (
	<SectionWrapper className="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
		<div className="bg-dashed">
			<div className={cn("sticky top-16 flex flex-col gap-1.5 p-6", "sm:p-8")}>
				<Prose>
					<h2 className="mb-2 text-3xl">{title}</h2>
					{description && <p>{description}</p>}
				</Prose>
			</div>
		</div>
		<div className="lg:col-span-2">{children}</div>
	</SectionWrapper>
);

export default StickyWrapper;
