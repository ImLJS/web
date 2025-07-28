import * as motion from "motion/react-client";
import Image from "next/image";
import { Icons } from "@/components/shared/icons";
import AvatarPic from "@/assets/images/avatar.webp";

const ProfilePicture = () => {
	return (
		<div className="relative my-5 md:mt-9">
			<div className="relative">
				<motion.div
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 10,
					}}
				>
					<Icons.concentric_circles className="mx-auto" />
				</motion.div>
				<div className="absolute inset-0 flex items-center justify-center">
					<motion.div
						key={"avatar"}
						className="h-[100px] w-[100px] overflow-hidden rounded-full"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
						}}
					>
						<Image
							src={AvatarPic}
							alt="avatar"
							width={100}
							height={100}
							className="h-full w-full object-cover"
							sizes="100px"
							priority
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePicture;
