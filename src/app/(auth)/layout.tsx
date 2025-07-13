import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: { index: false, follow: false },
	...getMetadata({
		title: "Log In",
		description: "Internal",
		url: "/login",
	}),
};

const LogInLayout = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>;
};
export default LogInLayout;
