import Link from "next/link";
import { Icons } from "../common/icons";

interface BentoCardProps {
	children: React.ReactNode;
	height?: string;
	rowSpan?: number;
	colSpan?: number;
	className?: string;
	showHoverGradient?: boolean;
	hideOverflow?: boolean;
	linkTo?: string;
}

const BentoLayout = ({
	children,
	height = "h-auto",
	rowSpan = 8,
	colSpan = 7,
	className = "",
	showHoverGradient = true,
	hideOverflow = true,
	linkTo,
}: BentoCardProps) => {
	const cardContent = (
		<div
			className={`group relative flex flex-col rounded-2xl border bg-card p-6 hover:bg-accent ${
				hideOverflow && "overflow-hidden"
			} ${height}row-span-${rowSpan}col-span-${colSpan} ${className}`}
		>
			{linkTo && (
				<div className="absolute right-4 bottom-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
					<Icons.externalLink className="h-6 w-6 text-indigo-600"/>
				</div>
			)}
			{showHoverGradient && (
				<div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
			)}
			{children}
		</div>
	);

	if (linkTo) {
		return linkTo.startsWith("/") ? (
			<Link href={linkTo} className="block">
				{cardContent}
			</Link>
		) : (
			<Link
				href={linkTo}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
			>
				{cardContent}
			</Link>
		);
	}

	return cardContent;
};

export default BentoLayout;
