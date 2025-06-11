import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Prose } from "../ui/prose";
import { ViewAnimation } from "../providers/view-animation";

import Link from "next/link";
import type { ReactNode } from "react";
import SectionLayout from "./section-layout";

interface ThirdsLayoutProps {
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
		<ViewAnimation
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			delay={0.4}
			className="relative"
		>
			{children}
		</ViewAnimation>
	</div>
);

const SmallSlot = ({
	caption,
	title,
	description,
	buttons,
}: ThirdsLayoutProps) => (
	<div>
		<ViewAnimation
			className="flex h-full flex-col items-start justify-between gap-4 p-6 sm:p-8"
			initial={{ opacity: 0, translateY: -8 }}
			whileInView={{ opacity: 1, translateY: 0 }}
		>
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
				{buttons.map((button, index) => (
					<Button
						asChild
						variant={index ? "link" : "outline"}
						className="gap-2"
						key={button.label}
					>
						<Link
							href={button.href}
							target={button.href.includes("http") ? "_blank" : undefined}
							rel={
								button.href.includes("http") ? "noreferrer noopener" : undefined
							}
						>
							{button.label}
							{button.href.includes("http") && (
								<ArrowUpRight className="size-4 text-foreground" />
							)}
						</Link>
					</Button>
				))}
			</div>
		</ViewAnimation>
	</div>
);

const ThirdsLayout = ({
	children,
	reverse = false,
	...props
}: ThirdsLayoutProps) => (
	<SectionLayout className="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0" heading="Gallery" description="A curated space celebrating the beauty of Japanese illustration and visual storytelling.">
		{reverse ? (
			<>
				<LargeSlot>{children}</LargeSlot>
				<SmallSlot {...props} />
			</>
		) : (
			<>
				<SmallSlot {...props} />
				<LargeSlot>{children}</LargeSlot>
			</>
		)}
	</SectionLayout>
);

export default ThirdsLayout;
