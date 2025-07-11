import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Providers from "./providers";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
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

export default MainLayout;
