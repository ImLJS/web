import Header from "@/components/common/header";
import DashedLayout from "@/components/layouts/dashed-layout";
import { ROUTES } from "@/data/routes";
import { getSession } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: {
		template: "%s | ImLJS",
		default: "Home",
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession();

	if (!session || session.user.role !== "admin") {
		redirect(ROUTES.LOGIN);
	}

	return (
		<>
			<Header />
			<DashedLayout>{children}</DashedLayout>
		</>
	);
};

export default AdminLayout;
