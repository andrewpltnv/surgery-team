import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { geistSans, geistMono } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	title: "Surgery Team",
	description: "Surgery team Kyiv",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<Header />
				{children}
				<Footer />
				<GoogleTagManager gtmId="GTM-WJ6VVHHV" />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
