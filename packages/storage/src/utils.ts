export const createPreviewUrl = (fileId: string): string => {
	const baseUrl = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
	const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
	const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
	return `${baseUrl}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${projectId}`;
};
