import { Skeleton } from "@/components/ui/skeleton";

interface ImageSkeletonProps {
	aspectRatio?: number;
}

const ImageSkeleton = ({ aspectRatio = 1 }: ImageSkeletonProps) => (
	<div
		className="relative break-inside-avoid overflow-hidden rounded-xl"
		style={{ aspectRatio }}
	>
		<Skeleton className="h-full w-full" />
		<div className="absolute bottom-0 left-0 w-full space-y-1 bg-gradient-to-t from-black/20 to-transparent p-3">
			<Skeleton className="h-4 w-3/4 bg-white/20" />
			<Skeleton className="h-3 w-1/2 bg-white/15" />
			<Skeleton className="h-3 w-1/3 bg-white/10" />
		</div>
	</div>
);

export default ImageSkeleton;
