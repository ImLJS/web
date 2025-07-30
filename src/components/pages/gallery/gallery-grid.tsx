import type { ImageWithDimensions } from "@/types/gallery";
import GalleryItem from "./gallery-item";

interface GalleryGridProps {
	images: ImageWithDimensions[];
	onImageLoad: (id: number) => void;
}

const GalleryGrid = ({ images, onImageLoad }: GalleryGridProps) => (
	<div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
		{images.map((img) => (
			<GalleryItem key={img.id} img={img} onImageLoad={onImageLoad} />
		))}
	</div>
);

export default GalleryGrid;
