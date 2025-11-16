import type { ReactNode } from "react";
import { SectionWrapper } from "./section-wrapper";

interface HeroProps {
	caption?: ReactNode;
	title?: string;
	children?: ReactNode;
	className?: string;
}

export const HeroLayout = ({ caption, title }: HeroProps) => (
	<SectionWrapper>
		<div className="mx-auto mt-16 divide-y text-center">
			<small className="block text-indigo-secondary text-sm sm:text-base">
				{caption}
			</small>
			<h1 className="max-w-2xl text-balance py-5 text-center font-medium text-4xl leading-tight tracking-tighter md:mx-auto md:text-6xl md:leading-[64px]">
				{title}
			</h1>
		</div>
	</SectionWrapper>
);
