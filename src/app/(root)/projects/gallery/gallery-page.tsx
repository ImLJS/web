"use client";

import SectionWrapper from "@/components/layouts/section-wrapper";
import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
	id: number;
	username: string;
	handle: string;
	source: string;
	fileId: string;
	previewUrl: string;
	createdAt: Date | null;
};

type ImageWithDimensions = GalleryImage & {
	width: number;
	height: number;
	cols: number;
	rows: number;
};

type GalleryPageProps = { galleryData: GalleryImage[] };

const Gallery = ({ galleryData }: GalleryPageProps) => {
	const [imagesWithSize, setImagesWithSize] = useState<
		ImageWithDimensions[] | null
	>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadImageSizes = async () => {
			const results = await Promise.all(
				galleryData.map((img) => {
					return new Promise<ImageWithDimensions>((resolve) => {
						const image = new window.Image();
						image.src = img.previewUrl;
						image.onload = () => {
							const width = image.naturalWidth;
							const height = image.naturalHeight;
							const aspectRatio = width / height;

							// Calculate grid spans based on actual dimensions
							let cols = 1;
							let rows = 1;

							// Column span based on aspect ratio
							if (aspectRatio > 2.5)
								cols = 3; // Ultra wide images
							else if (aspectRatio > 1.8)
								cols = 2; // Wide images
							else if (aspectRatio > 1.3) cols = 2; // Slightly wide images

							// Row span based on aspect ratio and actual height
							if (aspectRatio < 0.4)
								rows = 3; // Very tall images
							else if (aspectRatio < 0.6)
								rows = 2; // Tall images
							else if (aspectRatio < 0.8) rows = 2; // Portrait images

							// Additional logic: if image is very tall (height > 1.5 * width), give it more rows
							if (height > width * 1.5) rows = Math.max(rows, 2);
							if (height > width * 2.5) rows = 3;

							resolve({ ...img, width, height, cols, rows });
						};
						image.onerror = () => {
							// Fallback if image fails to load
							resolve({ ...img, width: 300, height: 200, cols: 1, rows: 1 });
						};
					});
				}),
			);
			setImagesWithSize(results);
		};

		loadImageSizes();
	}, []);

	if (!imagesWithSize) return <div className="p-6">Loading...</div>;

	return (
		<SectionWrapper
			heading="Image Gallery"
			description="A dynamic bento-style grid of uploaded visuals."
			className="border-y border-dashed"
		>
			<div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
				{imagesWithSize.map((img) => (
					<div
						key={img.id}
						className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-muted transition-transform duration-300 hover:scale-[1.02]"
					>
						<Image
							src={img.previewUrl}
							alt={img.username}
							width={img.width}
							height={img.height}
							className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
							sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
						/>
						<div className="absolute bottom-0 left-0 w-full translate-y-2 transform bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white transition-transform duration-300 group-hover:translate-y-0">
							<div className="font-medium">{img.username}</div>
							<div className="text-xs opacity-75">{img.handle}</div>
							<div className="mt-1 text-xs opacity-60">
								{img.width} × {img.height}
							</div>
							{img.createdAt && (
								<div className="text-xs opacity-60">
									{new Date(img.createdAt).toLocaleDateString()}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
};

export default Gallery;
