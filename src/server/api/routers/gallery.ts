import { z } from "zod";

import { deleteFile } from "@/lib/appwrite";
import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from "@/server/api/trpc";
import { gallery } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const galleryRouter = createTRPCRouter({
	insert: protectedProcedure
		.input(
			z.object({
				username: z.string(),
				handle: z.string(),
				source: z.string(),
				fileId: z.string(),
				previewUrl: z.url(),
				width: z.number(),
				height: z.number(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { username, handle, source, fileId, previewUrl, width, height } =
				input;

			// Insert the new gallery item into the database
			await ctx.db.insert(gallery).values({
				username,
				handle,
				source,
				fileId,
				previewUrl,
				width,
				height,
			});

			return { success: true };
		}),

	insertMultiple: protectedProcedure
		.input(
			z.object({
				items: z
					.array(
						z.object({
							username: z.string(),
							handle: z.string(),
							source: z.string(),
							fileId: z.string(),
							previewUrl: z.string(),
							width: z.number(),
							height: z.number(),
						}),
					)
					.min(1, "At least one item is required"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { items } = input;

			await ctx.db.insert(gallery).values(items);

			return {
				success: true,
				insertedCount: items.length,
			};
		}),

	getAll: publicProcedure.query(async ({ ctx }) => {
		const result = await ctx.db.select().from(gallery);
		return result;
	}),

	deleteFiles: protectedProcedure
		.input(
			z.object({
				fileIds: z.array(z.string()).min(1, "At least one file ID is required"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { fileIds } = input;

			try {
				// Delete each file from the storage concurrently
				await Promise.all(fileIds.map((fileId) => deleteFile({ fileId })));

				// Remove the gallery items from the database concurrently
				await Promise.all(
					fileIds.map((fileId) =>
						ctx.db.delete(gallery).where(eq(gallery.fileId, fileId)),
					),
				);

				return {
					success: true,
					deletedCount: fileIds.length,
				};
			} catch (error) {
				console.error("Error deleting files:", error);
				throw new Error("Failed to delete files");
			}
		}),
});
