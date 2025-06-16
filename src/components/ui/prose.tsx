import { cn } from "@/lib/utils";

import type { ComponentProps } from "react";

type ProseProps = ComponentProps<"div">;

export const Prose = ({ className, ...props }: ProseProps) => (
	<div
		className={cn(
			"prose prose-neutral dark:prose-invert prose-figure:my-8 prose-img:my-0 prose-video:my-0 max-w-none prose-headings:tracking-tight prose-a:no-underline",
			className,
		)}
		{...props}
	/>
);
