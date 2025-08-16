import YugenForm from "@/components/features/yugen/yugen-form";
import YugenTable from "@/components/features/yugen/yugen-table";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: { index: false, follow: false },
	...getMetadata({
		title: "Gallery",
		description: "Internal",
		url: "/admin/yugen",
	}),
};

const YugenManagePage = () => {
	return (
		<div className="my-6 space-y-10 md:mt-10 md:space-y-16">
			<YugenForm />
			<YugenTable />
		</div>
	);
};

export default YugenManagePage;
