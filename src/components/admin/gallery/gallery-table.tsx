import DataTable from "@/components/ui/data-table";
import { getGallery } from "@/db/admin/gallery";
import { columns } from "./columns";

const GalleryTable = async () => {
	const galleryData = await getGallery();

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-4 text-center font-bold text-2xl">Gallery Items</h1>
			<DataTable data={galleryData} columns={columns} />
		</div>
	);
};
export default GalleryTable;
