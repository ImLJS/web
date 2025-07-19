import { getGallery } from "@/db/admin/gallery";

const GalleryTable = async () => {
	const data = await getGallery();

	console.log(data);
	return <div>GalleryTable</div>;
};
export default GalleryTable;
