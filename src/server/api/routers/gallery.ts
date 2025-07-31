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

	// New procedure for inserting multiple gallery items
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
						}),
					)
					.min(1, "At least one item is required"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { items } = input;

			// Validate all URLs
			const validatedItems = items.map((item) => ({
				...item,
				previewUrl: z.string().url().parse(item.previewUrl), // Validate URL format
			}));

			// Batch insert all gallery items
			await ctx.db.insert(gallery).values(validatedItems);

			return {
				success: true,
				insertedCount: items.length,
			};
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

	// New procedure for creating multiple files
	createMultipleFiles: protectedProcedure
		.input(
			z.object({
				images: z
					.array(z.file("Invalid file type"))
					.min(1, "At least one image is required"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { images } = input;

			// Upload all images concurrently
			const uploadPromises = images.map(async (image) => {
				const fileRes = await createFile({ file: image });
				const previewUrl = getFilePreview({ fileId: fileRes.$id }).toString();

				return {
					...fileRes,
					previewUrl,
					originalName: image.name,
					size: image.size,
					type: image.type,
				};
			});

			const uploadResults = await Promise.all(uploadPromises);

			return {
				success: true,
				files: uploadResults,
				uploadedCount: uploadResults.length,
			};
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

	// New procedure for complete multi-file upload workflow
	uploadMultipleFiles: protectedProcedure
		.input(
			z.object({
				username: z.string().min(1, "Username is required"),
				handle: z.string().min(1, "Handle is required"),
				source: z.string().url("Source must be a valid URL"),
				images: z
					.array(z.file("Invalid file type"))
					.min(1, "At least one image is required"),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { username, handle, source, images } = input;

			try {
				// Upload all images to storage
				const uploadResults = await Promise.all(
					images.map(async (image) => {
						const fileRes = await createFile({ file: image });
						const fileId = fileRes.$id;
						const previewUrl = getFilePreview({ fileId }).toString();

						return {
							fileId,
							previewUrl,
							originalName: image.name,
						};
					}),
				);

				// Prepare data for database insert
				const galleryItems = uploadResults.map((result) => ({
					username,
					handle,
					source,
					fileId: result.fileId,
					previewUrl: result.previewUrl,
				}));

				// Insert all items to database
				await ctx.db.insert(gallery).values(galleryItems);

				return {
					success: true,
					uploadedCount: uploadResults.length,
					files: uploadResults,
				};
			} catch (error) {
				console.error("Error in multi-file upload:", error);
				throw new Error("Failed to upload multiple files");
			}
		}),
});
