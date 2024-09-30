import Image from "next/image";

const EXPERTS = [
	{
		name: "Dr. Jane Smith",
		pos: "Chief of Surgery",
		image: "/photo.png",
	},
	{
		name: "Dr. John Doe",
		pos: "Emergency Surgery Specialist",
		image: "/photoSm.jpg",
	},
	{
		name: "Dr. Emily Chen",
		pos: "Minimally Invasive Surgery Expert",
		image: "/dmytroJ.jpg",
	},
];

export default function Team() {
	return (
		<section id="team" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
					Our Expert Team
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{EXPERTS.map(({ name, pos, image }) => {
						return (
							<div
								className="flex flex-col items-center text-center"
								key={name}
							>
								<Image
									src={image}
									alt={name}
									width={200}
									height={200}
									className="rounded-full mb-4 size-52 object-cover"
								/>
								<h3 className="text-xl font-bold">{name}</h3>
								<p className="text-gray-500">{pos}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
