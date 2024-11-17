"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const BackLink = () => {
	const router = useRouter();

	return (
		<Button
			variant="outline"
			className="cursor-pointer"
			asChild
			onClick={() => router.back()}
		>
			<span>
				<ArrowLeft className="mr-2 h-4 w-4" />
				Повернутися назад
			</span>
		</Button>
	);
};
