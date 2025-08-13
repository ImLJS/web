"use client";

import type { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { api } from "@/trpc/react";
import { toast } from "sonner";
import { yugenSchema } from "./columns";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function RowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
	const galleryRow = yugenSchema.parse(row.original);
	const utils = api.useUtils();

	const handleDelete = async () => {
		const fileId = galleryRow.fileId;
		try {
			const response = await fetch("/api/yugen", {
				method: "DELETE",
				body: JSON.stringify([fileId]),
			});
			if (!response.ok) {
				throw new Error("Failed to delete file");
			}
			await utils.gallery.invalidate();
			toast.success("File deleted successfully");
		} catch (error) {
			console.error("Error deleting file:", error);
			toast.error("Failed to delete file");
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="size-8 data-[state=open]:bg-muted"
				>
					<MoreHorizontal />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[160px]">
				<DropdownMenuItem variant="destructive" onClick={handleDelete}>
					Delete
					<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
