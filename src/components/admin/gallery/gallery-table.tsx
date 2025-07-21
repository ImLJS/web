'use client';

import DataTable from "@/components/ui/data-table";
import { columns } from "./columns";
import { api } from "@/trpc/react";

const GalleryTable = () => {
	const [data, status] = api.gallery.getAll.useSuspenseQuery();
	console.log("Gallery Data Status:", status);

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-4 text-center font-bold text-2xl">Gallery Items</h1>
			<DataTable data={data} columns={columns} />
		</div>
	);
};
export default GalleryTable;
