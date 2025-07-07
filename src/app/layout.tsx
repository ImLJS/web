import "@/styles/globals.css";

import { siteMetadata } from "@/data/siteMetadata";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
	title: {
		template: "%s | ImLJS",
		default: "Home",
	},
	description: siteMetadata.homeDescription,
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="en"
			className={`${GeistMono.variable} ${GeistSans.variable}`}
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
		</html>
	);
};

export default RootLayout;
