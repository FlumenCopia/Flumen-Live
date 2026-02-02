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
  title: "FlumenX | Best Digital Marketing Agency in Trivandrum",
  description: " FlumenX offers the best SEO services, social media marketing, and tailored strategies for business growth.",
  keywords: 'premium service, trusted brand, digital marketing, web development, social media marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WTS92LEL34"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WTS92LEL34');
          `}
        </script>

        <link rel="icon" href="/images/flumen-favicon.png" />
      </head>
      {/* 4. Add BOTH variables to the class list */}
      <body className={`${inter.variable} ${orlean.variable}`}>
        {children}
      </body>
    </html>
  );
}