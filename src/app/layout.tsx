import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import 'animate.css/animate.min.css';
import { Suspense } from 'react'
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "1908 - BY LACRIM",
  description:
    "1908 by LACRIM is more than just a men's care line; it's a story of transformation and perseverance. Our brand, inspired by the life of our founder Lacrim, a visionary from the urban landscapes of France, embodies a blend of rugged urban style and luxury.  We celebrate every man, encouraging a shift from the hustle of city life to the refinement of self-care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="he">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </head>
      <body className={inter.className}><Suspense>{children}</Suspense></body>
    </html>
  );
}
