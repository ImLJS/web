"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AdminPage = () => {
	const router = useRouter();

	const handleSignOut = async () => {
		try {
			console.log("Attempting to sign out...");
			const result = await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						console.log("Sign out successful, redirecting to home page...");
						router.push("/");
					},
				},
			});
			console.log("Sign out result:", result);
		} catch (error) {
			console.error("Sign out error:", error);
		}
	};

	return (
		<div>
			<Button onClick={handleSignOut}>signout</Button>
		</div>
	);
};

export default AdminPage;
