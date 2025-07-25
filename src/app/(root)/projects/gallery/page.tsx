import { getPhotos } from "@/server/admin/gallery";
import Gallery from "./gallery-page";
import type { Metadata } from "next";
import { getMetadata } from "@/lib/seo";
import { siteMetadata } from "@/data/siteMetadata";

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
