import type { Metadata, Viewport } from "next";
import { Poppins, Arizonia } from "next/font/google";
import { siteMetadata, siteViewport, jsonLdData } from "@/lib/seo.config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arizonia",
});

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/logo-lombok-timur.jpg"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/logo-lombok-timur.jpg"
          type="image/png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${arizonia.variable} font-poppins text-gray-500 bg-white antialiased selection:bg-[#16a34a] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
