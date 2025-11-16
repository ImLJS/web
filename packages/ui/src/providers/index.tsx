import { Toaster } from "@repo/ui/components/sonner";
import { TooltipProvider } from "@repo/ui/components/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute={"class"}
			defaultTheme={"system"}
			enableSystem
			enableColorScheme
			disableTransitionOnChange
		>
			<TooltipProvider>{children}</TooltipProvider>
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
