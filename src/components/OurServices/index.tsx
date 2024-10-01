import { Microscope, HeartPulse, UserCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function OurServices() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32" id="services">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
					Our Services
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader>
							<Microscope className="h-6 w-6 mb-2" />
							<CardTitle>General Surgery</CardTitle>
						</CardHeader>
						<CardContent>
							Comprehensive surgical procedures for a wide range of conditions.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<HeartPulse className="h-6 w-6 mb-2" />
							<CardTitle>Emergency Surgery</CardTitle>
						</CardHeader>
						<CardContent>
							24/7 emergency surgical care for critical conditions.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<UserCircle className="h-6 w-6 mb-2" />
							<CardTitle>Specialized Procedures</CardTitle>
						</CardHeader>
						<CardContent>
							Advanced surgical techniques for complex cases.
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
