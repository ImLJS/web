import Header from "@/components/common/header";
import ProfilePicture from "@/components/home/profile-pic";
import DashedLayout from "@/components/layouts/dashed-layout";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/routes";
import { signIn } from "@/lib/auth/auth-client";

const handleSignIn = async () => {
	await signIn.social({
		provider: "github",
		callbackURL: ROUTES.ADMIN,
	});
};

const SignIn = () => {
	return (
		<>
			<Header />
			<DashedLayout>
				<div className="grid h-full divide-x lg:grid-cols-2">
					<div className="flex flex-col items-center justify-center bg-card px-12 py-16 text-center text-muted-foreground">
						<h1 className="mb-4 font-semibold text-3xl text-foreground">
							Welcome back, ImLJS 👋
						</h1>
						<p className="max-w-md text-lg italic">
							&quot;Code is like humor. When you have to explain it, it&apos;s
							bad.&quot;
							<br />
							<span className="text-foreground text-sm not-italic">
								– Cory House
							</span>
						</p>
					</div>

					<div className="flex flex-col items-center justify-center gap-6 px-6">
						<ProfilePicture />
						<Button className="rounded-lg px-6 py-5 font-medium text-base">
							Sign in as
							<span className="font-semibold">@ImLJS</span>
						</Button>
					</div>
				</div>
			</DashedLayout>
		</>
	);
};

export default SignIn;
