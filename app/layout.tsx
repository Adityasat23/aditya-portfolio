import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Satria Pratama | Digital Content Specialist",
  description: "Video Content Specialist with proven track record of creating high impact content for influencers and viral campaigns. 21.7M+ views generated across major brands like Google Indonesia, BCA, and Mandiri.",
  keywords: ["Digital Content Specialist", "Video Editor", "Content Creator", "Social Media Manager", "Aditya Satria Pratama"],
  authors: [{ name: "Aditya Satria Pratama" }],
  openGraph: {
    title: "Aditya Satria Pratama | Digital Content Specialist",
    description: "Where Creativity Meets Critical Thinking - Creating high-impact content that drives measurable results",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Satria Pratama | Digital Content Specialist",
    description: "Video Content Specialist specializing in viral campaigns and performance-driven content",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}