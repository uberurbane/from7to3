import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Token Learning Control — Govern AI Like Capital",
  description:
    "Token Learning Control is the operating system for governing AI-native organizations. Diagnose Coordination Debt™, govern cognitive capital, and move from AI experimentation to AI accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0E8] text-foreground">
        <Header />
        <main className="flex-1 pt-16 bg-[#F5F0E8]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
