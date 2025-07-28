"use client";

import { ROUTES } from "@/data/routes";
import { checkIsAdminClient, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Icons } from "@/components/shared/icons";

const LogOut = () => {
	const router = useRouter();
	const isAdmin = checkIsAdminClient();

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					router.replace(ROUTES.LOGIN);
					toast.success("Successfully signed out!");
				},
				onError: () => {
					toast.error("Failed to sign out. Please try again.");
				},
			},
		});
	};

	if (!isAdmin) {
		return null;
	}

	return (
		<button
			type="button"
			aria-label={"Log out"}
			onClick={handleSignOut}
			className="cursor-pointer rounded-full"
		>
			<Icons.logOut className="size-4.5 text-paper opacity-50 hover:opacity-100" />
		</button>
	);
};
export default LogOut;
