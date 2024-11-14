import type { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

export const components: PortableTextComponents = {
	marks: {
		link: ({ value, children }) => {
			return (
				<Link href={value?.url ?? value?.href} target={"_blank"} rel={"_blank"}>
					{children}
				</Link>
			);
		},
	},
};
