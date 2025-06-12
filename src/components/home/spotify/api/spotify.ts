import dayjs from "dayjs";
import "server-only";

import { siteMetadata } from "@/data/siteMetadata";
import { TRACK_STATUS } from "../types";
import {
	isCurrentlyPlayingPayload,
	isRecentlyPlayedPayload,
	isTokensPayload,
} from "../validation/validator";

const access = {
	token: "",
	expires: "",
};

export const getAccessToken = async (refreshToken: string) => {
	if (dayjs().isBefore(dayjs(access.expires))) {
		return access.token;
	}

	const params = new URLSearchParams();
	if (!siteMetadata.spotifyClientId || !siteMetadata.spotifyClientSecret) {
		throw new Error("Spotify client credentials are not configured");
	}
	params.append("client_id", siteMetadata.spotifyClientId);
	params.append("client_secret", siteMetadata.spotifyClientSecret);
	params.append("grant_type", "refresh_token");
	params.append("refresh_token", refreshToken);

	const tokensResponse = await fetch(
		`https://accounts.spotify.com/api/token?${params.toString()}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			next: {
				revalidate: 0,
			},
		},
	);

	const tokens: unknown = await tokensResponse.json();

	if (!isTokensPayload(tokens)) {
		return null;
	}

	access.token = tokens.access_token;
	access.expires = dayjs().add(tokens.expires_in, "second").toISOString();

	return tokens.access_token;
};

export const fetchLastTrack = async () => {
	if (!siteMetadata.spotifyRefreshToken) {
		return null;
	}

	const token = await getAccessToken(siteMetadata.spotifyRefreshToken);
	if (!token) return null;

	const currentlyPlayingResponse = await fetch(
		"https://api.spotify.com/v1/me/player/currently-playing",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			next: {
				revalidate: 60,
			},
		},
	);

	if (currentlyPlayingResponse.status === 200) {
		const currentlyPlayingData: unknown = await currentlyPlayingResponse.json();

		if (isCurrentlyPlayingPayload(currentlyPlayingData)) {
			return {
				track: currentlyPlayingData.item,
				status: currentlyPlayingData.is_playing
					? TRACK_STATUS.ONLINE
					: TRACK_STATUS.OFFLINE,
			};
		}
	}

	const recentlyPlayedResponse = await fetch(
		"https://api.spotify.com/v1/me/player/recently-played",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			next: {
				revalidate: 60,
			},
		},
	);

	const recentlyPlayedData: unknown = await recentlyPlayedResponse.json();

	if (!isRecentlyPlayedPayload(recentlyPlayedData)) {
		throw new Error("Unexpected error occured!");
	}

	return {
		track: recentlyPlayedData.items[0].track,
		status: TRACK_STATUS.OFFLINE,
	};
};
