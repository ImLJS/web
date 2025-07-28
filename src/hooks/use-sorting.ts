import { useMemo, useState } from "react";
import type { ImageWithDimensions, SortOption } from "@/types/gallery";

export const useSorting = (images: ImageWithDimensions[] | null) => {
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
