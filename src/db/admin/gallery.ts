import { db } from "@/db";
import { gallery } from "@/db/schemas/schema";

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
