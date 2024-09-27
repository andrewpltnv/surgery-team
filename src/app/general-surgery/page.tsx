import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope, HeartPulse, UserCircle, Phone } from "lucide-react";
import Team from "@/components/Team";
import WhyTeam from "@/components/Team/WhyTeam";

export default function GeneralSurgery() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
					<div className="container px-4 md:px-6 m-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									General and Emergency Surgery
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Providing professional and skilled surgical care when you need
									it most.
								</p>
							</div>
							<div className="space-x-4">
								<Button>Our Services</Button>
								<Button variant="outline">Contact Us</Button>
							</div>
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
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Emergency? We&apos;re Here to Help
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our emergency surgery team is available 24/7. Don&apos;t
									hesitate to call if you need immediate assistance.
								</p>
							</div>
							<Button className="inline-flex items-center" size="lg">
								<Phone className="mr-2 h-4 w-4" /> Call Emergency Line
							</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
