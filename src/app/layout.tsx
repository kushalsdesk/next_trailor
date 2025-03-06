import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Lora, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar.mod";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "ASHAA-Design School | Govt. Certified Dress Design Course",
  description:
    "Join our government-certified dress design course and vocational tailoring certificate program. Get tailor jobs, sell your designs, and work from home with our affordable sewing courses.",
  keywords:
    "Govt. certified dress design course, Government vocational course, tailoring certificate course, tailor jobs, Sell your designed cloth, Most affordable govt. sewing course, Government selai school, Job oriented vocational course, jobs in vocational course, sell your recycled course, work after course, work from home course, work from home job, Sell old cloths" as string, // ✅ Explicitly cast as string
  openGraph: {
    title: "ASHAA-Design School | Govt. Certified Dress Design Course",
    description:
      "Join our government-certified dress design course and vocational tailoring certificate program. Get tailor jobs, sell your designs, and work from home with our affordable sewing courses.",
    type: "website",
    locale: "en_US",
    url: "https://ashaa-tailor.vercel.app",
    siteName: "ASHAA-Design School",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={` ${raleway.variable} ${lora.variable}`}>
      <head>
        <meta name="keywords" content={metadata.keywords as string} />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
