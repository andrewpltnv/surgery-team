import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Microscope,
	Activity,
	Scissors,
	Stethoscope,
	Utensils,
	PocketKnife,
} from "lucide-react";
import Team from "@/components/Team";
import WhyTeam from "@/components/Team/WhyTeam";

const specialties = [
	{
		name: "General Surgery",
		icon: PocketKnife,
		description: "General and urgent surgury",
	},
	{
		name: "Proctology",
		icon: Microscope,
		description: "Care for colorectal health",
	},
	{
		name: "Endoscopy",
		icon: Stethoscope,
		description: "Advanced diagnostic procedures",
	},
	{
		name: "Bariatrics",
		icon: Utensils,
		description: "Comprehensive weight loss solutions",
	},
	{
		name: "Plastic Surgery",
		icon: Scissors,
		description: "Aesthetic and reconstructive procedures",
	},
	{
		name: "Oncological Surgery",
		icon: Activity,
		description: "Expert cancer treatment and care",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
					<div className="container px-4 md:px-6 m-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Welcome to SurgeryTeam
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Explore our specialized surgical services and find the expert
									care you need.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6 m-auto">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
							Our Surgical Specialties
						</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{specialties.map((specialty, index) => (
								<Link
									href={`/${specialty.name.toLowerCase().replace(" ", "-")}`}
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
								>
									<Card className="flex flex-col h-full items-center transition-all hover:bg-accent">
										<CardHeader>
											<CardTitle className="flex items-center space-x-2">
												<specialty.icon className="h-6 w-6" />
												<span>{specialty.name}</span>
											</CardTitle>
										</CardHeader>
										<CardContent className="flex-grow">
											<p className="text-muted-foreground line-clamp-1">
												{specialty.description}
											</p>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</section>
				<WhyTeam />
				<Team />
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Need Assistance?
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our team is here to help you find the right care for your
									needs.
								</p>
							</div>
							<Button size="lg">Contact Us</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
