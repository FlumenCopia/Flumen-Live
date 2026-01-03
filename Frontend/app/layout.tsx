import type { Metadata } from "next";
import localFont from "next/font/local"; // Import localFont
import "@/public/styles/main.scss";

// Configure the local font
const orlean = localFont({
  src: "./fonts/Orlean.ttf", // Path relative to this layout file
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
      {/* Apply the variable to the body */}
      <body className={`${orlean.variable}`}>
        {children}
      </body>
    </html>
  );
}