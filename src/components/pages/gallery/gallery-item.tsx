import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import type { ImageWithDimensions } from "@/types/gallery";

interface GalleryItemProps {
	img: ImageWithDimensions;
	onImageLoad: (id: number) => void;
}

const GalleryItem = ({ img, onImageLoad }: GalleryItemProps) => (
	<div className="group relative mb-2 break-inside-avoid overflow-hidden rounded-xl border border-border bg-muted">
		{/* Skeleton overlay - shows while image is loading */}
		{!img.loaded && (
			<div
				className="absolute inset-0 z-10"
				style={{ aspectRatio: img.width / img.height }}
			>
				<Skeleton className="h-full w-full" />
				<div className="absolute bottom-0 left-0 w-full space-y-1 bg-gradient-to-t from-black/20 to-transparent p-3">
					<Skeleton className="h-4 w-3/4 bg-white/20" />
					<Skeleton className="h-3 w-1/2 bg-white/15" />
					<Skeleton className="h-3 w-1/3 bg-white/10" />
				</div>
			</div>
		)}

		<Image
			src={img.previewUrl}
			alt={img.username}
			width={img.width}
			height={img.height}
			className={`h-auto w-full object-cover transition-all duration-300 group-hover:scale-105 ${
				img.loaded ? "opacity-100" : "opacity-0"
			}`}
			loading="lazy"
			sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
			onLoad={() => onImageLoad(img.id)}
		/>

		<div
			className={`absolute inset-0 flex items-end bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
				img.loaded ? "pointer-events-auto" : "pointer-events-none"
			}`}
		>
			<div className="w-full p-4 text-white">
				<div className="mb-1 font-medium text-base">{img.username}</div>
				<div className="text-sm text-white/80">{img.handle}</div>
			</div>
		</div>
	</div>
);

export default GalleryItem;
