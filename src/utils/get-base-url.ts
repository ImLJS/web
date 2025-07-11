export const getBaseUrl = () => {
	const base = process.env.NEXT_PUBLIC_SITE_URL;
	if (base) {
		return `https://${base}`;
	}

	// Check if we're running on the local network IP
	if (process.env.NODE_ENV === "test") {
		const host = process.env.HOST || "localhost";
		const port = process.env.PORT ?? 3000;

		// If host is set to the network IP, use it
		if (host === "10.221.96.26") {
			return `http://10.221.96.26:${port}`;
		}
	}

	return `http://localhost:${process.env.PORT ?? 3000}`;
};
