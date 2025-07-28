import { useEffect, useState } from "react";
import type { GalleryImage, ImageWithDimensions } from "@/types/gallery";

export const useImageProcessing = (galleryData: GalleryImage[]) => {
	const [imagesWithSize, setImagesWithSize] = useState<
		ImageWithDimensions[] | null
	>(null);

	const calculateImageDimensions = (
		img: GalleryImage,
	): Promise<ImageWithDimensions> => {
		return new Promise((resolve) => {
			const image = new window.Image();
			image.src = img.previewUrl;
			image.onload = () => {
				const width = image.naturalWidth;
				const height = image.naturalHeight;
				const aspectRatio = width / height;

				let cols = 1;
				let rows = 1;

				// Column span based on aspect ratio
				if (aspectRatio > 2.5) cols = 3;
				else if (aspectRatio > 1.8) cols = 2;
				else if (aspectRatio > 1.3) cols = 2;

				// Row span based on aspect ratio
				if (aspectRatio < 0.4) rows = 3;
				else if (aspectRatio < 0.6) rows = 2;
				else if (aspectRatio < 0.8) rows = 2;

				if (height > width * 1.5) rows = Math.max(rows, 2);
				if (height > width * 2.5) rows = 3;

				resolve({ ...img, width, height, cols, rows, loaded: false });
			};
			image.onerror = () => {
				resolve({
					...img,
					width: 300,
					height: 200,
					cols: 1,
					rows: 1,
					loaded: false,
				});
			};
		});
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadImageSizes = async () => {
			const results = await Promise.all(
				galleryData.map(calculateImageDimensions),
			);
			setImagesWithSize(results);
		};
		loadImageSizes();
	}, [galleryData]);

	return { imagesWithSize, setImagesWithSize };
};
