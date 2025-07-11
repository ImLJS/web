"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AdminPage = () => {
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push(ROUTES.SIGN_IN);
					toast.success("Successfully signed out!");
				},
				onError: () => {
					toast.error("Failed to sign out. Please try again.");
				},
			},
		});
	};

	return (
		<div>
			<Button onClick={handleSignOut}>signout</Button>
		</div>
	);
};

export default AdminPage;
