import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
