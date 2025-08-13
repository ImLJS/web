import { createFile, getFileDownload } from "@/lib/appwrite";
import { createPreviewUrl } from "@/lib/utils";
import { api } from "@/trpc/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const formData = await req.formData();

		const username = formData.get("Username") as string;
		const handle = formData.get("Handle") as string;
		const source = formData.get("Source") as string;
		const widths = formData.getAll("Width") as string[];
		const heights = formData.getAll("Height") as string[];

		// Get all images from FormData
		const images = formData.getAll("Images") as File[];

		if (!username || !handle || !source || !images || images.length === 0) {
			return NextResponse.json(
				{ error: "Missing required fields or no images provided" },
				{ status: 400 },
			);
		}

		// Validate that all entries are actually File objects
		const validImages = images.filter(
			(image) => image instanceof File && image.size > 0,
		);

		if (validImages.length === 0) {
			return NextResponse.json(
				{ error: "No valid images provided" },
				{ status: 400 },
			);
		}

		try {
			// Upload all images to Appwrite concurrently
			const uploadPromises = validImages.map(async (image) => {
				const fileRes = await createFile({ file: image });
				const fileId = fileRes.$id;
				const previewUrl = createPreviewUrl(fileId);

				return {
					fileId,
					previewUrl,
					originalName: image.name,
					size: image.size,
					type: image.type,
				};
			});

			const uploadResults = await Promise.all(uploadPromises);

			// Prepare data for batch database insert
			const yugenItems = uploadResults.map((result, index) => ({
				username,
				handle,
				source,
				fileId: result.fileId,
				previewUrl: result.previewUrl,
				width: Number.parseInt(widths[index] || "0", 10),
				height: Number.parseInt(heights[index] || "0", 10),
			}));

			// Insert all gallery items using tRPC
			await api.gallery.insertMultiple({
				items: yugenItems,
			});

			return NextResponse.json({
				success: true,
				uploadedCount: uploadResults.length,
				files: uploadResults,
			});
		} catch (uploadError) {
			return NextResponse.json(
				{ error: "Failed to process uploads. Please try again." },
				{ status: 500 },
			);
		}
	} catch (err) {
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

		await api.gallery.deleteFiles({ fileIds });

		return NextResponse.json({ success: true });
	} catch (err) {
		return NextResponse.json({ error: "Delete failed" }, { status: 500 });
	}
}
