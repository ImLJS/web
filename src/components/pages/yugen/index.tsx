"use client";
import {
	useEffect as useEffectOriginal,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";

import { cn } from "@/lib/utils";
import type { YugenImage } from "@/types/yugen";

import SectionWrapper from "@/components/layout/section-wrapper";
import Controls from "./controls";
import Photo from "./photo";

const useEffect =
	typeof window === "undefined" ? useEffectOriginal : useLayoutEffect;

const BREAKPOINTS = [640, 1024];

const useColumnCount = () => {
	const [columnCount, setColumnCount] = useState<number | null>(null);
	useEffect(() => {
		function handleResize() {
			let currentCount = 1;
			for (const breakpoint of BREAKPOINTS)
				if (window.matchMedia(`(min-width: ${breakpoint}px)`).matches)
					currentCount++;
			setColumnCount(currentCount);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return columnCount;
};

const useOrganisedPhotos = (
	photos: YugenImage[],
	columnCount: number | null,
) => {
	const organisedPhotos = useMemo(() => {
		if (columnCount === null || columnCount <= 0) return [];

		const columns: { photos: YugenImage[]; height: number; index: number }[] =
			new Array(columnCount)
				.fill(null)
				.map((_, i) => ({ photos: [], height: 0, index: i }));

		for (const photo of photos) {
			// Ensure we have valid dimensions
			if (
				!photo.width ||
				!photo.height ||
				photo.width <= 0 ||
				photo.height <= 0
			) {
				continue;
			}

			const lowestColumn = columns
				.slice()
				.sort((a, b) => a.height - b.height)[0];

			if (!lowestColumn) continue;

			const columnIndex = lowestColumn.index;
			if (columns[columnIndex]) {
				columns[columnIndex].photos.push(photo);
				columns[columnIndex].height += photo.height / photo.width;
			}
		}

		return columns.map((column) => column.photos);
	}, [photos, columnCount]);

	return organisedPhotos;
};

const YugenCollage = ({ photos }: { photos: YugenImage[] }) => {
	const count = useColumnCount();
	const columns = useOrganisedPhotos(photos, count);

	return (
		<div className="mt-6">
			<SectionWrapper
				heading="Yūgen Gallery"
				description="A timeless collection of soulful Japanese visual works."
				className="p-2"
				headingClassName="border-b"
			>
				<Controls />
				<div
					className={cn(
						"grid min-h-screen grid-cols-1 divide-x divide-separator transition duration-600 sm:grid-cols-2 lg:grid-cols-3",
						count === null ? "opacity-0" : "opacity-100",
					)}
				>
					{columns.map((column, i) => (
						<div key={i} className="flex flex-col divide-y divide-separator">
							{column.map((photo) => (
								<Photo key={photo.fileId} {...photo} />
							))}
						</div>
					))}
				</div>
			</SectionWrapper>
		</div>
	);
};

export default YugenCollage;
