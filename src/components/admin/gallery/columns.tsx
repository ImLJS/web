"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import type { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const gallerySchema = z.object({
	id: z.number(),
	username: z.string(),
	handle: z.string(),
	source: z.url(),
	fileId: z.string(),
	previewUrl: z.url(),
});

export type Gallery = z.infer<typeof gallerySchema>;

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
	},
	{
		accessorKey: "username",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Username" />
		),
	},
];
