import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const getTimeOfDayGreeting = () => {
	const now = new Date();
	const hours = now.getHours();

	if (hours < 12) {
		return "Good morning!";
	}

	if (hours < 17) {
		return "Good afternoon!";
	}

	return "Good evening!";
};

export const getImageDimensions = (
	file: File,
): Promise<{ width: number; height: number }> => {
	return new Promise((resolve, reject) => {
		const image = new Image();

		// Create a temporary URL for the file
		const url = URL.createObjectURL(file);

		// Set the image source
		image.src = url;

		// Wait until the image loads
		image.onload = () => {
			const width = image.naturalWidth;
			const height = image.naturalHeight;

			// Clean up the URL after image loads
			URL.revokeObjectURL(url);

			resolve({ width, height });
		};

		image.onerror = (err) => {
			URL.revokeObjectURL(url);
			reject(err);
		};
	});
};

export const createPreviewUrl = (fileId: string): string => {
	const baseUrl = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
	const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
	const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
	return `${baseUrl}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${projectId}`;
};
