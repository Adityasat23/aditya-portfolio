import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aditya-portfolio.vercel.app"),
  title: { default: "Aditya Satria Pratama | Digital Content Specialist", template: "%s | Aditya Satria Pratama" },
  description: "Video Content Specialist with proven track record of creating high impact content for influencers and viral campaigns. 21.7M+ views generated across major brands like Google Indonesia, BCA, and Mandiri.",
  keywords: ["Digital Content Specialist","Video Editor","Content Creator","Social Media Manager","Aditya Satria Pratama","Video Production","Content Strategy","Indonesia Content Creator","Semarang","Portfolio"],
  authors: [{ name: "Aditya Satria Pratama", url: "https://instagram.com/aditysat" }],
  creator: "Aditya Satria Pratama",
  publisher: "Aditya Satria Pratama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditya-portfolio.vercel.app",
    siteName: "Aditya Satria Pratama Portfolio",
    title: "Aditya Satria Pratama | Digital Content Specialist",
    description: "Where Creativity Meets Critical Thinking - Creating high-impact content that drives measurable results. 21.7M+ views generated.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Aditya Satria Pratama" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Satria Pratama | Digital Content Specialist",
    description: "Video Content Specialist specializing in viral campaigns and performance-driven content. 21.7M+ views generated.",
    creator: "@aditysat",
    images: ["/og-image.jpg"],
  },
};

const noFlashThemeScript = `
  try {
    var t = localStorage.getItem('theme');
    var d = document.documentElement.classList;
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      d.add('dark');
    } else {
      d.remove('dark');
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="theme-color" content="#0A0E27"/>
        {/* Apply theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className={`${inter.className} bg-background text-foreground`} suppressHydrationWarning>
        <a className="skip-link" href="#main">Skip to content</a>
        <StructuredData />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
