import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

export const FileUpload = ({
	onChange,
	value,
}: {
	onChange?: (files: File[]) => void;
	value?: File | null;
}) => {
	const [file, setFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
        setFile(value || null);
    }, [value, setFile]);

	const handleFileChange = (newFiles: File[]) => {
		const selectedFile = newFiles[0] ?? null;
		setFile(selectedFile);
		if (selectedFile) {
			onChange?.([selectedFile]);
		}
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const { getRootProps, isDragActive } = useDropzone({
		multiple: false,
		noClick: true,
		onDrop: handleFileChange,
		onDropRejected: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="w-full bg-dark/20" {...getRootProps()}>
			<div
				onClick={handleClick}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleClick();
					}
				}}
				className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
			>
				<input
					ref={fileInputRef}
					id="file-upload-handle"
					type="file"
					onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
					className="hidden"
					accept="image/*"
				/>
				<div className="flex flex-col items-center justify-center">
					<p className="font-bold text-base">Upload file</p>
					<p className="mt-2 font-normal text-base">
						Drag or drop your file here or click to upload
					</p>

					<div className="relative mx-auto mt-4 flex w-full max-w-xl items-center justify-center">
						{file ? (
							<div className="relative mx-auto flex flex-col rounded-md p-4 shadow-sm md:h-24">
								<div className="flex items-center justify-between gap-4">
									<p className="truncate">{file.name}</p>
									<p className="text-sm">
										{(file.size / (1024 * 1024)).toFixed(2)} MB
									</p>
								</div>
								<div className="mt-2 flex items-center justify-between text-sm">
									<p>{file.type}</p>
									<p>
										modified {new Date(file.lastModified).toLocaleDateString()}
									</p>
								</div>
							</div>
						) : (
							<div className="flex h-16 w-full max-w-[8rem] items-center justify-center rounded-md shadow-md dark:bg-neutral-900">
								{isDragActive ? (
									<p className="flex flex-col items-center">
										Drop it <FiUpload className="h-4 w-4" />
									</p>
								) : (
									<FiUpload className="h-4 w-4" />
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
