import { cn } from "@/lib/utils";

type GridLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

const GridLayout = ({ children, className }: GridLayoutProps) => {
	return (
		<div
			className={cn(
				className,
				"relative w-full",
				"before:absolute before:top-0 before:h-px before:bg-border",
				"before:-left-4 md:before:-left-8 before:right-[-1rem] md:before:right-[-2rem] lg:before:inset-x-0",
				"after:-left-4 md:after:-left-8 after:right-[-1rem] md:after:right-[-2rem] lg:after:inset-x-0",
				"after:absolute after:bottom-0 after:h-px after:bg-border",
			)}
		>
			{children}
		</div>
	);
};

export default GridLayout;
