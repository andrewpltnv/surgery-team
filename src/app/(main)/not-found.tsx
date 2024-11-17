import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { BackLink } from "@/components/BackLink";

export default function NotFound() {
	return (
		<div className="my-auto bg-gray-50 flex flex-col items-center justify-center p-4">
			<Card className="max-w-md w-full">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
						<AlertCircle className="mr-2 h-6 w-6 text-red-500" />
						404 - Сторінку не знайдено
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center text-muted-foreground">
						Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
					</p>
				</CardContent>
				<CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
					<BackLink />
					<Button asChild>
						<Link href="/" className="flex items-center">
							<Home className="mr-2 h-4 w-4" />
							На головну
						</Link>
					</Button>
				</CardFooter>
			</Card>
			<p className="mt-8 text-center text-sm text-muted-foreground">
				Якщо ви вважаєте, що це помилка, будь ласка,{" "}
				<Link href="/contact" className="text-primary hover:underline">
					зв'яжіться з нами
				</Link>
				.
			</p>
		</div>
	);
}
