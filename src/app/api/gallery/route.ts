import { insertGallery } from "@/db/admin/gallery";
import { createFile, getFilePreview } from "@/lib/appwrite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const formData = await req.formData();

		const username = formData.get("Username") as string;
		const handle = formData.get("Handle") as string;
		const source = formData.get("Source") as string;
		const image = formData.get("Image") as File;

		if (!username || !handle || !source || !image) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Upload image to Appwrite
		const fileRes = await createFile({ file: image });
		const fileId = fileRes.$id;
		const previewUrl = getFilePreview({ fileId }).toString();

		await insertGallery({
			username,
			handle,
			source,
			fileId,
			previewUrl,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Upload error:", err);
		return NextResponse.json({ error: "Upload failed" }, { status: 500 });
	}
}
