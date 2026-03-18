import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <html lang="en" className={`dark ${caveat.variable}`}>
      <body className="flex flex-col h-screen justify-between bg-background">
        <div className="bg-background">
          <Header />
        </div>

        <div className="mb-auto bg-background">{children}</div>
        <Analytics />
        <SpeedInsights />

        <div className="bg-background">
          <Footer />
        </div>
      </body>
    </html>
  );
}
