import AdminAppCard from "@/components/admin/admin-app-grid";
import SectionCards from "@/components/admin/section-cards";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: { index: false, follow: false },
	...getMetadata({
		title: "Admin",
		description: "Internal",
		url: "/admin",
	}),
};

const AdminPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-10 md:space-y-16">
			<SectionCards />
			<AdminAppCard />
		</div>
	);
};

export default AdminPage;
