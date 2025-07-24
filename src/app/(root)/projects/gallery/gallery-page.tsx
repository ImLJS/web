"use client";

import SectionWrapper from "@/components/layouts/section-wrapper";
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
type GalleryPageProps = { galleryData: GalleryImage[] };

const Gallery = ({ galleryData }: GalleryPageProps) => {
	const [imagesWithSize, setImagesWithSize] = useState<Array<
		GalleryImage & { cols: number; rows: number }
	> | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadImageSizes = async () => {
			const results = await Promise.all(
				galleryData.map((img) => {
					return new Promise<GalleryImage & { cols: number; rows: number }>(
						(resolve) => {
							const image = new Image();
							image.src = img.previewUrl;
							image.onload = () => {
								const aspectRatio = image.width / image.height;

								// Simple rule: landscape = wider col-span, portrait = taller row-span
								const cols = aspectRatio > 1.2 ? 2 : 1;
								const rows = aspectRatio < 0.8 ? 2 : 1;

								resolve({ ...img, cols, rows });
							};
						},
					);
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
			<div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{imagesWithSize.map((img) => (
					<div
						key={img.id}
						className={`relative overflow-hidden rounded-xl border border-border bg-muted col-span-${img.cols}row-span-${img.rows}`}
					>
						<img
							src={img.previewUrl}
							alt={img.username}
							className="h-full w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-2 text-sm text-white">
							{img.username}{" "}
							<span className="text-xs opacity-50">{img.handle}</span>
						</div>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
};

export default Gallery;
