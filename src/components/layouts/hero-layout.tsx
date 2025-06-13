import { Children } from "react";

import { cn } from "@/lib/utils";
import { ViewAnimation } from "../providers/view-animation";

import SectionLayout from "./section-layout";

import type { ReactNode } from "react";

interface HeroProps {
	image?: ReactNode;
	caption?: ReactNode;
	title: string;
	children?: ReactNode;
	className?: string;
}

const HeroLayout = ({
	image,
	caption,
	title,
	children,
	className,
}: HeroProps) => (
	<SectionLayout className={cn("border-b p-6", className)}>
		<div
			className={cn(
				"relative flex flex-col items-start justify-center gap-5 overflow-hidden",
				"sm:items-center sm:gap-6 sm:rounded-lg sm:border sm:bg-card sm:px-8 sm:py-20 sm:shadow-tile lg:gap-8",
			)}
		>
			{image && (
				<ViewAnimation
					initial={{ opacity: 0, translateY: -8 }}
					whileInView={{ opacity: 1, translateY: 0 }}
				>
					{image}
				</ViewAnimation>
			)}
			<div className="flex flex-col gap-4 sm:items-center">
				{caption && (
					<ViewAnimation
						initial={{ opacity: 0, translateY: -8 }}
						whileInView={{ opacity: 1, translateY: 0 }}
					>
						<small className="block text-muted-foreground text-sm sm:text-base">
							{caption}
						</small>
					</ViewAnimation>
				)}
				<ViewAnimation
					initial={{ opacity: 0, translateY: -8 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					delay={0.4}
				>
					<h1
						className={cn(
							"max-w-4xl text-balance font-bold font-kenfolg text-3xl leading-tighter tracking-tight",
							"sm:text-center sm:text-4xl sm:leading-tight",
							"lg:text-5xl lg:leading-tight",
						)}
					>
						{title}
					</h1>
				</ViewAnimation>
			</div>
			{Children.map(children, (child, index) => (
				<ViewAnimation
					initial={{ opacity: 0, translateY: -8 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					delay={0.8 + index * 0.4}
				>
					{child}
				</ViewAnimation>
			))}
		</div>
	</SectionLayout>
);

export default HeroLayout;
