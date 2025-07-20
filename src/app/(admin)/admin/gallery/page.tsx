import GalleryForm from "@/components/admin/gallery/gallery-form";
import GalleryTable from "@/components/admin/gallery/gallery-table";
import { getMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: { index: false, follow: false },
	...getMetadata({
		title: "Gallery",
		description: "Internal",
		url: "/admin/gallery",
	}),
};

const GalleryPage = () => {
	return (
		<div className="my-6 space-y-10 md:mt-10 md:space-y-16">
			<GalleryForm />
			<GalleryTable />
		</div>
	);
};

export default GalleryPage;
