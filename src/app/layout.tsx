import type { Metadata, Viewport } from "next";
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

// Get theme from environment variable
const theme = process.env.NEXT_PUBLIC_THEME || 'default';
const isBlackWhite = theme === 'black-white';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.pages.dev'), // Update with your actual Cloudflare Pages domain
  title: "Pham Quoc Thanh (Neo) - Finance Student & Tech Enthusiast",
  description: "Finance student passionate about AI, Blockchain, and Data Science. Building innovative solutions at the intersection of finance and technology.",
  keywords: ["Finance", "AI", "Blockchain", "Data Science", "Programming", "Portfolio", "Pham Quoc Thanh", "Neo", "Vietnam"],
  authors: [{ name: "Pham Quoc Thanh (Neo)" }],
  creator: "Pham Quoc Thanh",
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

export const viewport: Viewport = {
  themeColor: isBlackWhite ? "#000000" : "#667eea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={isBlackWhite ? 'bw-theme' : ''}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col ${isBlackWhite ? 'bw-theme bg-white text-black' : 'bg-gray-900 text-white'}`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

