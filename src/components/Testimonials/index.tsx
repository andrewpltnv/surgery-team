import type { Testimonial } from "./testimonials";
import AutoplayCarousel from "../Carousel";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import clsx from "clsx";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import type { Reviews } from "@root/sanity.types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Testimonials({ reviews }: { reviews: Reviews }) {
	if (!reviews.reviewsArray) return null;

	const testimonials = reviews?.reviewsArray?.map((r) => {
		return {
			name: r.name ?? "",
			date: r.date ?? "",
			review: r.review ?? "",
			source: r.source ?? "",
		};
	});

	const content = (
		<CarouselContent className="cursor-grab p-6">
			{testimonials.map((t) => (
				<CarouselItem key={t.date + t.name} className="h-96 basis-80">
					<TestimonialItem testimonial={t} isOpen={false} />
				</CarouselItem>
			))}
		</CarouselContent>
	);

	return (
		<div className="flex w-full flex-col bg-slate-400/[.04]">
			<AutoplayCarousel content={content} delay={3000} />
		</div>
	);
}

const TestimonialItem = ({
	testimonial,
	isOpen,
}: { testimonial: Testimonial; isOpen: boolean }) => {
	if (!testimonial || !testimonial.review) return null;

	return (
		<Card className="relative flex h-96 flex-col">
			<CardHeader className="pb-2">
				<CardTitle className="text-xl">
					{testimonial.name}
					<CardDescription>
						<span className="text-xs">{testimonial.date}</span>
					</CardDescription>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p
					className={clsx(
						{ "line-clamp-[10]": !isOpen },
						"select-none hyphens-auto text-sm",
					)}
				>
					{testimonial.review}
				</p>
				{testimonial?.review.length > 290 && (
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant={"link"}
								className="underline underline-offset-2 hover:bg-muted"
							>
								Читати повністю {">>>"}
							</Button>
						</DialogTrigger>
						<VisuallyHidden>
							<DialogTitle />
						</VisuallyHidden>
						<DialogContent className="max-h-screen overflow-auto p-0">
							<Card className="flex flex-col">
								<CardHeader className="pb-2">
									<CardTitle className="text-xl">
										{testimonial.name}
										<CardDescription>
											<span className="text-xs">{testimonial.date}</span>
										</CardDescription>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className={clsx("hyphens-auto")}>{testimonial.review}</p>
								</CardContent>
								<CardFooter className="prose bottom-0 text-xs">
									<blockquote className="line-clamp-3 leading-none">
										{testimonial.source}
									</blockquote>
								</CardFooter>
							</Card>
						</DialogContent>
					</Dialog>
				)}
			</CardContent>
			<CardFooter className="prose absolute bottom-0 text-xs">
				<blockquote className="line-clamp-3 leading-none">
					{testimonial.source}
				</blockquote>
			</CardFooter>
		</Card>
	);
};
