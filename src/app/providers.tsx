import { Toaster } from "@/components/ui/sonner";
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
			{children}
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
