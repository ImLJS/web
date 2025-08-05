import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			enableColorScheme
			disableTransitionOnChange
		>
			<TRPCReactProvider>{children}</TRPCReactProvider>
			<SpeedInsights />
			<Toaster
				toastOptions={{
					duration: 2500,
				}}
				visibleToasts={5}
				expand
			/>
		</ThemeProvider>
	);
};

export default Providers;
