import "./globals.css";
import Header from "@/components/Header";
import { Caveat } from "next/font/google";
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
        <div className="dark:bg-gray-900">
          <Header />
        </div>

        <div className="mb-auto dark:bg-gray-900">{children}</div>

        <div className="dark:bg-gray-900">
          <Footer />
        </div>
      </body>
    </html>
  );
}
