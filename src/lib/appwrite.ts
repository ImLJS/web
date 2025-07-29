import { Client, ID, Storage } from "appwrite";

export const client = new Client();
export const storage = new Storage(client);

const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string;

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

export const createFile = async ({ file }: { file: File }) => {
	const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
	return response;
};

export const getFilePreview = ({ fileId }: { fileId: string }) => {
	const result = storage.getFilePreview(BUCKET_ID, fileId);
	return result;
};

export const getFileDownload = ({ fileId }: { fileId: string }) => {
	const result = storage.getFileDownload(BUCKET_ID, fileId);
	return result;
};

export const deleteFile = async ({ fileId }: { fileId: string }) => {
	const response = await storage.deleteFile(BUCKET_ID, fileId);
	return response;
}
