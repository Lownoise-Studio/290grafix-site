import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "290 GraFiX | Custom Printing & Graphics | Houston, TX",
  description:
    "Houston's premier custom print shop. Signs, banners, apparel, business cards, DTF, silkscreen, car wraps & more. Serving Houston, Cypress, Hockley, Waller, Hempstead & Brenham. Call 832-687-2741.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
