"use client";

import SectionWrapper from "@/components/layout/section-wrapper";
import GalleryControls from "./gallery-controls";
import GalleryGrid from "./gallery-grid";
import LoadingGrid from "./loading-grid";
import { useImageProcessing } from "@/hooks/use-image-processing";
import { useSorting } from "@/hooks/use-sorting";
import type { GalleryImage } from "@/types/gallery";

interface GalleryProps {
	galleryData: GalleryImage[];
}

const Gallery = ({ galleryData }: GalleryProps) => {
	const { imagesWithSize, setImagesWithSize } = useImageProcessing(galleryData);
	const { sortBy, sortedImages, handleSortChange } = useSorting(imagesWithSize);

	const handleImageLoad = (imageId: number) => {
		setImagesWithSize(
			(prev) =>
				prev?.map((img) =>
					img.id === imageId ? { ...img, loaded: true } : img,
				) || null,
		);
	};

	if (!imagesWithSize) {
		return (
			<div className="mt-6">
				<SectionWrapper
					heading="Image Gallery"
					description="A dynamic bento-style grid of uploaded visuals."
					className="p-2"
				>
					<GalleryControls sortBy={sortBy} onSortChange={handleSortChange} />
					<LoadingGrid galleryData={galleryData} />
				</SectionWrapper>
			</div>
		);
	}

	return (
		<div className="mt-6">
			<SectionWrapper
				heading="Image Gallery"
				description="A dynamic bento-style grid of uploaded visuals."
				className="p-2"
                headingClassName="border-b"
			>
				<GalleryControls sortBy={sortBy} onSortChange={handleSortChange} />
				<GalleryGrid images={sortedImages} onImageLoad={handleImageLoad} />
			</SectionWrapper>
		</div>
	);
};

export default Gallery;
