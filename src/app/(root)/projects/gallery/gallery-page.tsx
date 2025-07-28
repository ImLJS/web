"use client";

import SectionWrapper from "@/components/layouts/section-wrapper";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
	loaded: boolean;
};

type SortOption = "newest" | "random";

// Skeleton component for individual images
const ImageSkeleton = ({ aspectRatio = 1 }: { aspectRatio?: number }) => (
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

// Gallery controls component
const GalleryControls = ({
	sortBy,
	onSortChange,
}: {
	sortBy: SortOption;
	onSortChange: (value: SortOption) => void;
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div className="mb-4 flex items-center justify-between">
			<Select value={sortBy} onValueChange={onSortChange}>
				<SelectTrigger className="w-48">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="newest">Newest First</SelectItem>
					<SelectItem value="random">Randomized</SelectItem>
				</SelectContent>
			</Select>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button variant="ghost" size="icon">
						<Info className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Gallery Disclaimer</DialogTitle>
					</DialogHeader>
					<div className="space-y-3 text-muted-foreground text-sm">
						<p>
							This gallery features curated illustrations sourced from various
							platforms. Please note:
						</p>
						<ul className="list-inside list-disc space-y-1">
							<li>
								All images are credited to their original creators whenever
								possible
							</li>
							<li>
								We do not claim ownership of content unless explicitly stated
							</li>
							<li>
								Content reflects the views of the original artists, not this
								platform
							</li>
							<li>
								We cannot guarantee the accuracy of image details or metadata
							</li>
							<li>
								If you're the artist and wish to have your work removed, please
								contact us via email
							</li>
						</ul>
						<p>
							By viewing this gallery, you acknowledge and accept these terms.
						</p>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

// Individual gallery item component
const GalleryItem = ({
	img,
	onImageLoad,
}: {
	img: ImageWithDimensions;
	onImageLoad: (id: number) => void;
}) => (
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

// Gallery grid component
const GalleryGrid = ({
	images,
	onImageLoad,
}: {
	images: ImageWithDimensions[];
	onImageLoad: (id: number) => void;
}) => (
	<div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
		{images.map((img) => (
			<GalleryItem key={img.id} img={img} onImageLoad={onImageLoad} />
		))}
	</div>
);

// Loading skeleton grid
const LoadingGrid = ({ galleryData }: { galleryData: GalleryImage[] }) => (
	<div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
		{galleryData.map((img, index) => (
			<ImageSkeleton
				key={img.id}
				aspectRatio={index % 3 === 0 ? 0.75 : index % 4 === 0 ? 1.5 : 1}
			/>
		))}
	</div>
);

// Custom hook for image processing
const useImageProcessing = (galleryData: GalleryImage[]) => {
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

// Custom hook for sorting
const useSorting = (images: ImageWithDimensions[] | null) => {
	const [sortBy, setSortBy] = useState<SortOption>("newest");
	const [randomSeed, setRandomSeed] = useState(Math.random());

	const sortedImages = useMemo(() => {
		if (!images) return [];

		if (sortBy === "newest") {
			return [...images].sort((a, b) => {
				if (!a.createdAt && !b.createdAt) return 0;
				if (!a.createdAt) return 1;
				if (!b.createdAt) return -1;
				return (
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				);
			});
		}
		// Use Fisher-Yates shuffle with seed for true randomization
		const shuffled = [...images];
		let seed = randomSeed;

		for (let i = shuffled.length - 1; i > 0; i--) {
			seed = (seed * 9301 + 49297) % 233280;
			const j = Math.floor((seed / 233280) * (i + 1));
			if (
				typeof shuffled[i] !== "undefined" &&
				typeof shuffled[j] !== "undefined"
			) {
				[shuffled[i], shuffled[j]] = [
					shuffled[j] as ImageWithDimensions,
					shuffled[i] as ImageWithDimensions,
				];
			}
		}
		return shuffled;
	}, [images, sortBy, randomSeed]);

	const handleSortChange = (newSort: SortOption) => {
		setSortBy(newSort);
		// Generate new random seed when switching to random
		if (newSort === "random") {
			setRandomSeed(Math.random());
		}
	};

	return { sortBy, sortedImages, handleSortChange };
};

// Main Gallery component
const Gallery = ({ galleryData }: { galleryData: GalleryImage[] }) => {
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
			>
				<GalleryControls sortBy={sortBy} onSortChange={handleSortChange} />
				<GalleryGrid images={sortedImages} onImageLoad={handleImageLoad} />
			</SectionWrapper>
		</div>
	);
};

export default Gallery;
