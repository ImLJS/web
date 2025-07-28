import DashedLayout from "@/components/layout/dashed-layout";
import { ROUTES } from "@/data/routes";
import { getSession } from "@/lib/auth";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	robots: { index: false, follow: false },
	...getMetadata({
		title: "Log In",
		description: "Internal",
		url: "/login",
	}),
};

const LogInLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession();

	if (session) {
		redirect(ROUTES.ADMIN);
	}

	return <DashedLayout>{children}</DashedLayout>;
};
export default LogInLayout;
