"use client";

import Link from "next/link";

import { createPreviewUrl } from "@/lib/utils";
import type { YugenImage } from "@/types/yugen";
import LazyImage from "./lazy-image";

const Photo = ({
	fileId,
	width,
	height,
	username,
	handle,
	source,
}: YugenImage) => {
	return (
		<div className="group relative overflow-hidden">
			<LazyImage
				src={createPreviewUrl(fileId)}
				alt={`Illustration by ${username} (@${handle})`}
				width={width}
				height={height}
			/>
			<Link
				href={source}
				className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-[#0000] to-[#000c] p-6 opacity-0 transition [.group:hover_&]:opacity-100"
			>
				<div className="flex flex-col justify-end">
					<div className="font-semibold text-text-primary">{username}</div>
					<div className="text-sm text-text-secondary">{handle}</div>
				</div>
			</Link>
		</div>
	);
};

export default Photo;
