export const getBaseUrl = () => {
	if (typeof window !== "undefined") return window.location.origin;
	if (process.env.NEXT_PUBLIC_SITE_URL) {
		console.log("Using NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);
		return process.env.NEXT_PUBLIC_SITE_URL;
	}
	return `http://localhost:${process.env.PORT ?? 3000}`;
};
