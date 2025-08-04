"use client";

import { Icons } from "@/components/shared/icons";
import { ROUTES } from "@/data/routes";
import { signOut, useSession } from "@/server/auth/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogOut = () => {
	const router = useRouter();
	const { data: session } = useSession();

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

	if (!session) {
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
