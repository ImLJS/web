"use client";

import { atom, useAtom } from "jotai";

import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const mobileMenuOpen = atom(false);

const MobileNav = () => {
	const [open, setOpen] = useAtom(mobileMenuOpen);

	return (
		<>
			<div className="pointer-events-none fixed top-16 left-0 z-10 flex h-[calc(100vh-5rem)] w-full flex-col gap-7 overflow-auto lg:hidden">
				<div
					className={cn(
						"-translate-y-full flex w-full flex-col gap-2 rounded-b-md bg-background px-6 pb-6 transition-transform duration-500 ease-in-expo sm:px-8",
						{
							"pointer-events-auto translate-y-0": open,
						},
					)}
				>
					<nav className="flex flex-col items-start gap-2.5">
						<ul className="w-full">
							{NAV.map((link) => (
								<li key={link.link} className="w-full">
									<Link
										key={link.link}
										href={link.link}
										onClick={() => setOpen(false)}
										className="block w-full py-1.5"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default MobileNav
