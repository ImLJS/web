"use client";

import DataTable from "@/components/ui/data-table";
import { api } from "@/trpc/react";
import { columns } from "./columns";

const GalleryTable = () => {
	const [data] = api.gallery.getAll.useSuspenseQuery();

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-4 text-center font-bold text-2xl">Gallery Items</h1>
			<DataTable data={data} columns={columns} />
		</div>
	);
};
export default GalleryTable;
