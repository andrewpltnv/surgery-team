import { Stethoscope } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link className="flex items-center justify-center" href="/#">
				<Stethoscope className="h-6 w-6 mr-2" />
				<span className="font-bold">SurgeryTeam</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#"
				>
					Services
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#"
				>
					About Us
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
}