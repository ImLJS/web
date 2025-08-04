"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getFileDownload } from "@/lib/appwrite"; // Update this import path
import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { z } from "zod";
import { DataTableRowActions } from "./gallery-row-actions";

export const gallerySchema = z.object({
	id: z.number(),
	username: z.string(),
	handle: z.string(),
	source: z.url(),
	fileId: z.string(),
	previewUrl: z.url(),
});

export type Gallery = z.infer<typeof gallerySchema>;

const handleFileDownload = async (fileId: string) => {
	try {
		const downloadUrl = getFileDownload({ fileId });

		const response = await fetch(downloadUrl);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const blob = await response.blob();

		const blobUrl = window.URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = blobUrl;
		link.download = fileId;

		// Add to DOM, click, and remove
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		window.URL.revokeObjectURL(blobUrl);

	} catch (error) {
		console.error("Error downloading file:", error);
	}
};

export const columns: ColumnDef<Gallery>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllRowsSelected() ||
						(table.getIsSomeRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
					aria-label="Select all"
					className="translate-y-[2px]"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
					className="translate-y-[2px]"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		id: "image",
		cell: ({ row }) => {
			const { previewUrl } = row.original;
			return (
				<div className="flex items-center justify-center">
					<Image
						src={previewUrl}
						alt="Gallery Item"
						width={40}
						height={40}
						className="h-10 w-10 rounded object-cover"
					/>
				</div>
			);
		},
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Image"
				className="text-center"
			/>
		),
	},
	{
		accessorKey: "id",
		accessorFn: (row) => row?.id?.toString(),
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Id" />
		),
	},
	{
		accessorKey: "fileId",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="File Id" />
		),
		cell: ({ row }) => {
			const fileId = row.getValue("fileId") as string;
			return (
				<button
					type="button"
					onClick={() => handleFileDownload(fileId)}
					className="cursor-pointer font-mono text-blue-600 text-sm hover:text-blue-800 hover:underline"
					title="Click to download file"
				>
					{fileId}
				</button>
			);
		},
	},
	{
		accessorKey: "username",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Username" />
		),
	},
	{
		accessorKey: "handle",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Handle" />
		),
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
