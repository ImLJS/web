import "@/styles/globals.css";

import Contact from "@/components/common/contact";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Providers from "./providers";
import { siteMetadata } from "@/data/siteMetadata";

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
						<Header />
						<div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
							<div className="hidden w-full border-r bg-dashed opacity-75 lg:block" />
							<div className="relative col-span-1">{children}</div>
							<div className="hidden w-full border-l bg-dashed opacity-75 lg:block" />
						</div>
						<Contact />
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
