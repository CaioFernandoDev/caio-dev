"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Caveat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="flex flex-col h-screen justify-between dark:bg-gray-900">
        <ThemeProvider attribute="class">
          <div className="dark:bg-gray-900">
            <Header />
          </div>

          <div className="mb-auto dark:bg-gray-900">{children}</div>
          <Analytics />

          <div className="dark:bg-gray-900">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
