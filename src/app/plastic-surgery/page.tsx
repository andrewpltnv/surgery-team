import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope, HeartPulse, UserCircle } from "lucide-react";
import Team from "@/components/Team";
import WhyTeam from "@/components/Team/WhyTeam";

export default function PlasticSurgery() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
					<div className="container px-4 md:px-6 m-auto">
						<div className="flex flex-col space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Plastic Surgery
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								Providing professional and skilled surgical care when you need
								it most.
							</p>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
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
									Comprehensive surgical procedures for a wide range of
									conditions.
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
				<WhyTeam />
				<Team />
			</main>
		</div>
	);
}
