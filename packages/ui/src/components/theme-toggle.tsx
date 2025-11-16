"use client";

import { Icons } from "@repo/ui/components/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Icons.mode_toggle className="size-4.5 text-paper opacity-50 hover:opacity-100" />
		);
	}

	const handleSetTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	return (
		<button
			type="button"
			aria-label={
				resolvedTheme === "dark"
					? "Switch to light theme"
					: "Switch to dark theme"
			}
			onClick={handleSetTheme}
			className="cursor-pointer rounded-full"
		>
			<Icons.mode_toggle className="size-4.5 text-paper opacity-50 hover:opacity-100" />
		</button>
	);
};

export default ThemeToggle;
