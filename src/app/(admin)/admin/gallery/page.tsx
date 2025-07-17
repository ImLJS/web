import GalleryForm from "@/components/admin/gallery/gallery-form";
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
		<div className="mt-6 space-y-10 md:mt-10 md:space-y-16">
			<GalleryForm />
		</div>
	);
};

export default GalleryPage;
