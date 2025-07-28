import ImageSkeleton from "./image-skeleton";
import type { GalleryImage } from "@/types/gallery";

interface LoadingGridProps {
	galleryData: GalleryImage[];
}

const LoadingGrid = ({ galleryData }: LoadingGridProps) => (
	<div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
		{galleryData.map((img, index) => (
			<ImageSkeleton
				key={img.id}
				aspectRatio={index % 3 === 0 ? 0.75 : index % 4 === 0 ? 1.5 : 1}
			/>
		))}
	</div>
);

export default LoadingGrid;
