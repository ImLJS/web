export const getBaseUrl = () => {
	const base = process.env.NEXT_PUBLIC_SITE_URL;
	if (base) {
		return `https://${base}`;
	}
	return `http://localhost:${process.env.PORT ?? 3000}`;
};
