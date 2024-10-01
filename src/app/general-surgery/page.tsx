import { Button } from "@/components/ui/button";
import Team from "@/components/Team";
import WhyTeam from "@/components/Team/WhyTeam";
import OurServices from "@/components/OurServices";
import { Phone } from "lucide-react";

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
								<Button asChild>
									<a href="#services">Our Services</a>
								</Button>
								<Button variant="outline">Contact Us</Button>
							</div>
						</div>
					</div>
				</section>
				<OurServices />
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
