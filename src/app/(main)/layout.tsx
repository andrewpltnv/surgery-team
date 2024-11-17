import type { Metadata } from "next";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const ogImage = [
	{ url: "/app/og", type: "image/png", width: 1200, height: 630 },
];

export function generateMetadata(): Metadata {
	return {
		title: "103 Surgery",
		description: "103 Surgery team Kyiv",
		openGraph: {
			images: ogImage,
			title: "103 Surgery",
		},
		twitter: {
			images: ogImage,
		},
	};
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Toaster />
			<GoogleTagManager gtmId="GTM-WJ6VVHHV" />
			<SpeedInsights />
			<Analytics />
			<Footer />
		</>
	);
}
