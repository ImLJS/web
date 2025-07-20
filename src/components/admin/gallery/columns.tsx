"use client";

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
