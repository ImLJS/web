import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { gallery } from "@/server/db/schema";

export const galleryRouter = createTRPCRouter({
	insert: protectedProcedure.input(z.object({
		username: z.string(),
		handle: z.string(),
		source: z.string(),
		fileId: z.string(),
		previewUrl: z.url(),
	})).mutation(async ({ input, ctx }) => {
		const { username, handle, source, fileId, previewUrl } = input;

		// Insert the new gallery item into the database
		await ctx.db.insert(gallery).values({
			username,
			handle,
			source,
			fileId,
			previewUrl,
		});
	}),
    getAll: protectedProcedure.query(async ({ ctx }) => {
        const result = await ctx.db.select().from(gallery);
        return result; 
    })
})