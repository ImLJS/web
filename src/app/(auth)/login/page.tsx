import LoginForm from "@/components/features/auth/login-form";

const LoginPage = () => {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
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
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
