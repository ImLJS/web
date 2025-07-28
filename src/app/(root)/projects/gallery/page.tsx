import Gallery from "@/components/pages/gallery";
import { siteMetadata } from "@/data/siteMetadata";
import { getMetadata } from "@/lib/seo";
import { getPhotos } from "@/server/admin/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({
	title: "Gallery",
	description: siteMetadata.galleryDescription,
	url: "/projects/gallery",
});

const GalleryPage = async () => {
	const galleryItems = await getPhotos();

	return <Gallery galleryData={galleryItems} />;
};

export default GalleryPage;
