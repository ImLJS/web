import { ROUTES } from "@/data/routes";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession();

	console.log("AdminLayout session:", session);

	if (!session || session.user.role !== "admin") {
		redirect(ROUTES.SIGN_IN);
	}

	return <>{children}</>;
};

export default AdminLayout;
