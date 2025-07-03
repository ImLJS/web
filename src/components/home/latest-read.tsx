import { unstable_cache as cache } from "next/cache";
import Image from "next/image";

import Link from "next/link";

const getLatestRead = cache(
	() =>
		Promise.resolve({
			id: 1,
			title: "Thinking Fast and Slow",
			author: "Daniel Kahneman",
			thumbnail:
				"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
			link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
		}),
	["latest-read"],
	{ revalidate: 60 * 60 * 24 },
);

const LatestRead = async () => {
	const data = await getLatestRead();

	const { title, author, thumbnail, link } = data;

	return (
		<div className="h-full">
			<Link
				href={link}
				className="group relative block h-full w-full overflow-hidden rounded-lg border bg-card shadow-tile transition-colors hover:bg-accent"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="flex h-full items-center justify-between">
					<div className="relative flex h-full min-w-0 flex-col justify-between self-stretch p-6 sm:p-8">
						<small className="text-muted-foreground">Recently read 📚 </small>
						<div className="mt-16 flex flex-col gap-1">
							<h2 className="font-bold text-xl tracking-tight sm:text-2xl">
								{title}
							</h2>

							<p className="truncate text-muted-foreground text-sm sm:text-base">
								by {author}
							</p>
						</div>
					</div>

					<div className="relative w-2/5 shrink-0 self-stretch">
						<Image
							src={thumbnail}
							alt={title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover object-top transition-transform group-hover:scale-105"
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default LatestRead;
