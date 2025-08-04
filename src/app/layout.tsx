import "@/styles/globals.css";

import { siteMetadata } from "@/data/siteMetadata";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Providers from "./providers";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
	metadataBase: new URL("https://imljs.me"),
	robots: { index: true, follow: true },
	twitter: { card: "summary_large_image", creator: "@imljs" },
	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
		],
	},
};

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
				src={siteMetadata.umamiWebsiteUrl}
				data-website-id={siteMetadata.umamiWebsiteId}
			/>
		</html>
	);
};

export default MainLayout;
