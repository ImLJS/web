import { Prose } from "@/components/ui/prose";
import { allFacts } from "@/data/facts";
import { cn } from "@/lib/utils";
import StickyWrapper from "../layouts/sticky-wrapper";

const Facts = () => (
	<StickyWrapper
		title="Fun facts"
		description="Some unique things about me ✨ Did you know that I..."
	>
		<div className="grid grid-cols-1 sm:grid-cols-3">
			{allFacts.map((fact, index, array) => (
				<div
					className={cn(
						index < array.length - 1
							? "border-b sm:border-r sm:border-b-0"
							: "",
					)}
					key={fact.title}
				>
					<div
						className={cn(
							"flex h-full flex-col items-start justify-between gap-6 px-6 py-8 transition-colors hover:bg-card sm:p-8 lg:gap-8 dark:hover:bg-accent",
						)}
					>
						<div className="flex size-9 shrink-0 items-center justify-center">
							<fact.icon className="size-full" />
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl leading-loose tracking-tight">
								<span className="block leading-tight">{fact.title}</span>
							</h2>
							<Prose className="prose-sm">
								<p>{fact.description}</p>
							</Prose>
						</div>
					</div>
				</div>
			))}
		</div>
	</StickyWrapper>
);

export default Facts;
