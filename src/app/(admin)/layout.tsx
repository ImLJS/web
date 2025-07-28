import Header from "@/components/features/navigation/header";
import DashedLayout from "@/components/layout/dashed-layout";
import { ROUTES } from "@/data/routes";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession();

	if (!session) {
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
