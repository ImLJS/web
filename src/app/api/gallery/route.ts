import {
	createFile,
	deleteFile,
	getFileDownload,
	getFilePreview,
} from "@/lib/appwrite";
import { deleteGalleryItems, insertGallery } from "@/server/admin/gallery";
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

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const fileId = searchParams.get("fileId");

	if (!fileId) {
		return NextResponse.json({ error: "File ID is required" }, { status: 400 });
	}

	try {
		// Get the file download URL from Appwrite
		const downloadUrl = getFileDownload({ fileId });

		// Redirect to the actual file download URL
		return NextResponse.redirect(downloadUrl.toString());
	} catch (err) {
		console.error("Download error:", err);
		return NextResponse.json({ error: "Download failed" }, { status: 500 });
	}
}

export async function DELETE(req: Request) {
	try {
		const fileIds: string[] = await req.json();

		if (!fileIds || fileIds.length === 0) {
			return NextResponse.json(
				{ error: "No file IDs provided" },
				{ status: 400 },
			);
		}

		// Delete files from Appwrite
		await Promise.all(fileIds.map((fileId) => deleteFile({ fileId })));

		// Delete from DB
		await deleteGalleryItems(fileIds);

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Delete error:", err);
		return NextResponse.json({ error: "Delete failed" }, { status: 500 });
	}
}
