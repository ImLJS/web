import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

type WrapperProps = {
	children: React.ReactNode;
	className?: string;
	heading?: string;
	description?: string;
	id?: string;
};

const Cross = () => (
	<div className="relative h-6 w-6">
		<div className="absolute left-3 h-6 w-px bg-background" />
		<div className="absolute top-3 h-px w-6 bg-background" />

		<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
			<PlusIcon size={20} className="text-connection" />
		</div>
	</div>
);

const SectionWrapper = ({
	id,
	children,
	className,
	heading,
	description,
}: WrapperProps) => {
	return (
		<div
			className={cn(
				"relative w-full",
				// Mobile: keep lines within viewport
				"after:right-0 after:left-0",
				"before:right-0 before:left-0",
				// Medium screens and up: extend lines
				"md:after:-left-8 md:after:right-[-2rem]",
				"md:before:-left-8 md:before:right-[-2rem]",
				// Large screens: full width
				"lg:after:inset-x-0 lg:before:inset-x-0",
				"after:absolute after:bottom-0 after:h-px after:bg-border",
				"before:absolute before:top-0 before:h-px before:bg-border",
			)}
		>
			{(heading || description) && (
				<div className="divide-y text-center">
					{heading && (
						<div className="text-center font-medium text-indigo-secondary text-sm">
							<span>{heading}</span>
						</div>
					)}
					{description && (
						<h2 className="flex items-center justify-center py-5 text-center font-medium text-3xl leading-10 tracking-tighter md:mx-auto md:max-w-lg md:text-4xl">
							{description}
						</h2>
					)}
				</div>
			)}
			<div className={cn(className)} {...(id ? { id } : {})}>
				{children}
			</div>
			<div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
				<Cross />
			</div>
			<div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
				<Cross />
			</div>
		</div>
	);
};

export default SectionWrapper;
