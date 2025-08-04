import Header from "@/components/features/navigation/header";
import DashedLayout from "@/components/layout/dashed-layout";
import { ROUTES } from "@/data/routes";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	if (!session || session?.user?.role !== "admin") {
		toast.error("You do not have permission to access this page.");
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
