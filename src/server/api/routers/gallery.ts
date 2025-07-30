import { z } from "zod";

import { createFile, deleteFile, getFilePreview } from "@/lib/appwrite";
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
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { username, handle, source, fileId, previewUrl } = input;

			// Insert the new gallery item into the database
			await ctx.db.insert(gallery).values({
				username,
				handle,
				source,
				fileId,
				previewUrl,
			});

			return { success: true };
		}),
	getAll: publicProcedure.query(async ({ ctx }) => {
		const result = await ctx.db.select().from(gallery);
		return result;
	}),
	createFile: protectedProcedure
		.input(
			z.object({
				image: z.file("Invalid file type"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { image } = input;

			// Upload the image file to the storage
			const fileRes = await createFile({ file: image });
			const previewUrl = getFilePreview({ fileId: fileRes.$id }).toString();

			return {
				...fileRes,
				previewUrl,
			};
		}),
	deleteFiles: protectedProcedure
		.input(z.object({ fileIds: z.array(z.string()) }))
		.mutation(async ({ input, ctx }) => {
			const { fileIds } = input;

			// Delete each file from the storage
			await Promise.all(fileIds.map((fileId) => deleteFile({ fileId })));

			// Remove the gallery items from the database
			for (const fileId of fileIds) {
				await ctx.db.delete(gallery).where(eq(gallery.fileId, fileId));
			}

			return { success: true };
		}),
});
