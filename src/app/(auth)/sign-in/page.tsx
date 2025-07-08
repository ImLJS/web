import Header from "@/components/common/header";
import ProfilePicture from "@/components/home/profile-pic";
import DashedLayout from "@/components/layouts/dashed-layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignIn = () => {
	return (
		<>
			<Header />
			<DashedLayout>
				<div className="grid h-full lg:grid-cols-2">
					<div className="relative hidden bg-muted lg:block">
						<Image
							src="/placeholder.svg"
							alt="Sign In"
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-4">
						<ProfilePicture />
						<div className="flex flex-col items-center justify-center gap-4">
							<Button>
								Login <span className="font-semibold">@ImLJS</span>
							</Button>
						</div>
					</div>
				</div>
			</DashedLayout>
		</>
	);
};
export default SignIn;
