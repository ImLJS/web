"use client";

import { atom, useAtom } from "jotai";
import { motion } from "motion/react";
import Link from "next/link";
import { memo, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";

import type { ForwardRefComponent, SVGMotionProps } from "motion/react";
import type { ComponentProps } from "react";

export const mobileMenuOpen = atom(false);

// Hamburger component
const Path = (
	props: ComponentProps<
		ForwardRefComponent<SVGPathElement, SVGMotionProps<SVGPathElement>>
	>,
) => (
	<motion.path
		fill="transparent"
		strokeWidth="2"
		className="stroke-foreground"
		strokeLinecap="round"
		layout
		{...props}
	/>
);

interface HamburgerProps {
	readonly open: boolean;
	readonly onToggle: () => void;
}

const Hamburger = memo<HamburgerProps>(({ open, onToggle }) => (
	<motion.button onClick={onToggle} data-mobile-nav-trigger="true">
		<span className="sr-only">{open ? "close" : "open"} menu</span>
		<svg width="22" height="20" viewBox="0 0 22 20">
			<title>Hamburger</title>
			<Path
				initial="closed"
				animate={open ? "open" : "closed"}
				variants={{
					closed: { d: "M 2 4 L 20 4" },
					open: { d: "M 3 15.5 L 16 4" },
				}}
			/>
			<Path
				d="M 2 10 L 20 10"
				animate={open ? "open" : "closed"}
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				initial="closed"
				animate={open ? "open" : "closed"}
				variants={{
					closed: { d: "M 2 16 L 20 16" },
					open: { d: "M 3 4 L 16 16" },
				}}
			/>
		</svg>
	</motion.button>
));

Hamburger.displayName = "Hamburger";

// Mobile nav trigger component
export const MobileNavTrigger = () => {
	const [open, setOpen] = useAtom(mobileMenuOpen);

	return <Hamburger open={open} onToggle={() => setOpen((o) => !o)} />;
};

// Mobile nav component
const MobileNav = () => {
	const [open, setOpen] = useAtom(mobileMenuOpen);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				open &&
				navRef.current &&
				!navRef.current.contains(event.target as Node) &&
				!(event.target as Element).closest("[data-mobile-nav-trigger]")
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open, setOpen]);

	return (
		<>
			<div className="pointer-events-none fixed top-14 left-0 z-10 flex h-[calc(100vh-5rem)] w-full flex-col gap-7 overflow-auto lg:hidden">
				<div
					ref={navRef}
					className={cn(
						"-translate-y-full flex w-full flex-col gap-2 rounded-b-md border-b bg-background px-6 pb-6 transition-transform duration-500 ease-in-expo sm:px-8",
						{
							"pointer-events-auto translate-y-0": open,
						},
					)}
				>
					<nav className="flex flex-col items-start gap-2.5">
						<ul className="w-full">
							{NAV.map((link) => (
								<li key={link.href} className="w-full">
									<Link
										key={link.href}
										href={link.href}
										className="block w-full py-1.5 text-sm"
										onClick={() => setOpen(false)}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>

						<Button
							variant="outline"
							asChild
							onClick={() => setOpen(false)}
							className="w-full"
						>
							<Link href="#contact">Get in touch</Link>
						</Button>
					</nav>
				</div>
			</div>
		</>
	);
};

export default MobileNav;
