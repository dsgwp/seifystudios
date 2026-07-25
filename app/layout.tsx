import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

/* Inter for body text — clean, readable, neutral */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Syne for display headings — geometric, editorial, bold */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seify Studios — Web Design & Development",
  description:
    "Seify Studios designs and builds modern, high-performing websites. Bespoke design and clean code, crafted to convert and built to last.",
  openGraph: {
    title: "Seify Studios — Web Design & Development",
    description:
      "Bespoke website design and development. We do one thing and we do it exceptionally well.",
    siteName: "Seify Studios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-bg text-ivory antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
