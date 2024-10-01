import Team from "@/components/Team";
import WhyTeam from "@/components/Team/WhyTeam";
import OurServices from "@/components/OurServices";

export default function Proctology() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
					<div className="container px-4 md:px-6 m-auto">
						<div className="flex flex-col space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Proctology
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								Providing professional and skilled surgical care when you need
								it most.
							</p>
						</div>
					</div>
				</section>
				<OurServices />
				<WhyTeam />
				<Team />
			</main>
		</div>
	);
}
