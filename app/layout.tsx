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

export const metadata: Metadata = {
  title: "Prakash Monis - Full Stack Developer",
  description: "Result-driven Full Stack Developer specializing in modern web technologies, Python, Flask, PHP, React, Next.js, and data structures.",
  keywords: ["Prakash Monis", "Full Stack Developer", "Python", "Flask", "React", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-black dark:text-white">
        <Navbar />
        <MobileSidebar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
