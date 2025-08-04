export type GalleryImage = {
	id: number;
	username: string;
	handle: string;
	source: string;
	fileId: string;
	previewUrl: string;
	createdAt: Date | null;
	width: number;
	height: number;
};

export type ImageWithDimensions = GalleryImage & {
	width: number;
	height: number;
	cols: number;
	rows: number;
	loaded: boolean;
};

export type SortOption = "newest" | "random";
