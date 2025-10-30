import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '700', '800'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Pham Quoc Thanh (Neo) - Finance Student & Tech Enthusiast",
  description: "Finance student passionate about AI, Blockchain, and Data Science. Building innovative solutions at the intersection of finance and technology.",
  keywords: ["Finance", "AI", "Blockchain", "Data Science", "Programming", "Portfolio", "Pham Quoc Thanh", "Neo", "Vietnam"],
  authors: [{ name: "Pham Quoc Thanh (Neo)" }],
  creator: "Pham Quoc Thanh",
  themeColor: "#667eea",
  openGraph: {
    title: "Pham Quoc Thanh (Neo) - Finance Student & Tech Enthusiast",
    description: "Finance student passionate about AI, Blockchain, and Data Science",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 500,
        height: 500,
        alt: "Neo's Logo"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-900 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

