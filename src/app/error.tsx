"use client";

import ErrorPage from "@/components/common/error-page";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
	return <ErrorPage type="500" />;
};

export default ErrorComponent;
