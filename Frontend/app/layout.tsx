import type { Metadata } from "next";
import localFont from "next/font/local"; 
import { Inter } from "next/font/google"; 
import "@/public/styles/main.scss";

// 2. Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 3. Configure Orlean for Headings only
const orlean = localFont({
  src: "./fonts/Orlean.ttf",
  variable: "--font-orlean",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlumenCopia",
  description: "Artificial Neural Network AI React NextJs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/flumen-favicon.png"/>
      </head>
      {/* 4. Add BOTH variables to the class list */}
      <body className={`${inter.variable} ${orlean.variable}`}>
        {children}
      </body>
    </html>
  );
}