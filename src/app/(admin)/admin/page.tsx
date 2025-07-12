import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AdminPage = () => {
	return <div>Hello Admin!</div>;
};

export default AdminPage;
