import { api } from "@/trpc/server";
import { db } from "../db";
import { gallery } from "../db/schema";
import { eq } from "drizzle-orm";

type SubmitPayload = {
	username: string;
	handle: string;
	source: string;
	fileId: string;
	previewUrl: string;
};

export const insertGallery = async (data: SubmitPayload) => {
	await db.insert(gallery).values({
		username: data.username,
		handle: data.handle,
		source: data.source,
		fileId: data.fileId,
		previewUrl: data.previewUrl,
	});
};

export const getPhotos = async () => {
	const data = await api.gallery.getAll();
	return data;
};

export const deleteGalleryItems = async (fileIds: string[]) => {
	const deletePromises = fileIds.map((fileId) =>
		db.delete(gallery).where(eq(gallery.fileId, fileId)),
	);

	await Promise.all(deletePromises);
};
