import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import MobileSidebar from "@/components/MobileSidebar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const siteUrl = "https://prakashm.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Prakash Monis | Full Stack Developer",
    template: "%s | Prakash Monis",
  },

  description:
    "Prakash Monis is a Full Stack Developer specializing in Python, Flask, React, Next.js, PHP, and modern web development.",

  keywords: [
    "Prakash Monis",
    "Prakash Monis Developer",
    "Full Stack Developer",
    "Software Developer",
    "Web Developer",
    "Python Developer",
    "Flask Developer",
    "React Developer",
    "Next.js Developer",
    "PHP Developer",
    "Java Developer",
    "Computer Science Student",
  ],

  authors: [
    {
      name: "Prakash Monis",
    },
  ],

  creator: "Prakash Monis",
  publisher: "Prakash Monis",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prakash Monis",
    title: "Prakash Monis | Full Stack Developer",
    description:
      "Portfolio of Prakash Monis, a Full Stack Developer specializing in Python, Flask, React, Next.js, PHP, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prakash Monis - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prakash Monis | Full Stack Developer",
    description:
      "Portfolio of Prakash Monis, a Full Stack Developer specializing in Python, Flask, React, Next.js, PHP, and modern web technologies.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black selection:bg-red-600 selection:text-white">
        <Navbar />

        <MobileSidebar />

        <main className="flex-1 w-full bg-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}