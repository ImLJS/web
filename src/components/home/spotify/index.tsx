import { unstable_cache as cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { FaCircle, FaSpotify } from "react-icons/fa";
import { fetchLastTrack } from "./api/spotify";
import { TRACK_STATUS } from "./types";

const getTrack = cache(fetchLastTrack, ["spotify"], { revalidate: 60 * 5 });

const Spotify = async () => {
	const data = await getTrack();

	if (!data) return null;

	const { artists, album, name, external_urls } = data.track;

	return (
		<div className="h-full">
			<Link
				href={external_urls.spotify}
				className="group relative block h-full w-full overflow-hidden rounded-lg border bg-card shadow-tile transition-colors hover:bg-accent"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="flex h-full items-center justify-between">
					<div className="relative flex h-full min-w-0 flex-col justify-between p-6 sm:p-8">
						<div className="size-9 md:size-11">
							<FaSpotify className="text-success" />
						</div>

						<span className="mt-8 flex items-baseline gap-2 text-success text-xs lg:text-sm">
							{data.status === TRACK_STATUS.ONLINE ? (
								<>
									<span className="flex gap-px">
										{[1, 2, 3].map((i) => (
											<span
												key={i}
												className="inline-block h-[1px] w-[3px] animate-bar-pulse rounded-sm bg-success"
												style={{
													animationDelay:
														i === 1 ? "0.5s" : i === 3 ? "1.2s" : "0s",
												}}
											/>
										))}
									</span>
									Now playing
								</>
							) : (
								<>
									<FaCircle className="w-3.5 text-success" />
									Offline. Last played
								</>
							)}
						</span>

						<h2 className="truncate font-bold text-xl tracking-tight sm:text-2xl">
							{name}
						</h2>

						<p className="truncate text-muted-foreground text-sm sm:text-base">
							{artists.map((artist) => artist.name).join(", ")}
						</p>
					</div>

					<div className="relative w-2/5 shrink-0 self-stretch">
						<Image
							src={album.images[0].url}
							alt={`${album.name} album cover`}
							fill
							sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 15vw"
							className="object-cover transition-transform group-hover:scale-105"
							priority={false}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Spotify;
