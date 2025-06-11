import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ViewAnimation } from "../providers/view-animation";

import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
	heading?: ReactNode;
	description?: ReactNode;
};

const Cross = () => (
	<div className="relative h-6 w-6">
		<div className="absolute left-3 h-6 w-px bg-background" />
		<div className="absolute top-3 h-px w-6 bg-background" />

		<ViewAnimation
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
		>
			<PlusIcon size={20} className="text-connection" />
		</ViewAnimation>
	</div>
);

const SectionLayout = ({
	children,
	className,
	heading,
	description,
	...props
}: SectionProps) => (
	<section {...props}>
		<div className="relative mx-auto">
			{(heading || description) && (
				<div className="space-y-4 border-x border-b px-4 pt-5 pb-8 text-center sm:px-8">
					{heading && (
						<span className="font-medium text-sky text-xs uppercase tracking-wider">
							{heading}
						</span>
					)}
					{description && (
						<p className="mx-auto max-w-xl text-center font-semibold text-2xl text-foreground leading-snug tracking-tight sm:text-3xl">
							{description}
						</p>
					)}
				</div>
			)}
			<div className={cn("border-x", className)}>{children}</div>
			<div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
				<Cross />
			</div>
			<div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
				<Cross />
			</div>
		</div>
	</section>
);

export default SectionLayout;
