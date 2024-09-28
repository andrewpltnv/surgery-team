import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { geistSans, geistMono } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";

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
			<GoogleTagManager gtmId="GTM-WJ6VVHHV" />
			<SpeedInsights />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
