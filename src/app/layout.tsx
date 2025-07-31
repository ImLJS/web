import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Providers from "./providers";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist",
	preload: false,
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
	preload: false,
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="en"
			className={`${geistMono.variable} ${geist.variable}`}
			suppressHydrationWarning
		>
			<body className="flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto">
				<Providers>
					<main
						className={cn(
							"relative flex min-h-screen flex-1 flex-col border-border/50 border-x",
						)}
					>
						{children}
					</main>
				</Providers>
			</body>
			<Script
				defer
				src="https://umami.imljs.me/script.js"
				data-website-id="007d6c4b-396e-4609-af56-591645289038"
			/>
		</html>
	);
};

export default MainLayout;
