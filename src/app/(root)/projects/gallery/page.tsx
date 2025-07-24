import { getPhotos } from "@/server/admin/gallery";
import Gallery from "./gallery-page";

const GalleryPage = async () => {
	const galleryItems = await getPhotos();

	return <Gallery galleryData={galleryItems} />;
};

export default GalleryPage;
