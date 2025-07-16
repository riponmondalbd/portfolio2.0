import Header from "@/components/Header/Header";
import StairTransition from "@/components/animations/Effect/StairTransition";
import PageTransition from "@/components/animations/PageTransition/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Ripon Mondal",
    template: "%s | Ripon Mondal",
  },
  description: "Portfolio website for show my works to world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className}  antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}

// import { motion } from "motion/react";
