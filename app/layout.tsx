import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import DarkVeil from "@/components/ui/DarkVeil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "chihab's Portfolio",
	description: "Modern & Minimal chihab bouzar Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<head>
				<link
					rel='icon'
					href='favicon.ico'
					sizes='any'
				/>
			</head>
			<body className={`${inter.className} relative min-h-screen`}>
				<div className='absolute inset-0 z-0'>
					<DarkVeil
						speed={0.3}
						hueShift={180}
						noiseIntensity={0.02}
						warpAmount={1}
					/>
				</div>
				<div className='relative z-10'>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
