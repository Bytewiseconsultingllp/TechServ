import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import "@fortawesome/fontawesome-free/css/all.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechCerv - AI, Cloud & Digital Transformation",
  description: "Empowering your business with AI, Cloud, and Digital Transformation services",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "TechCerv - AI, Cloud & Digital Transformation",
    description: "Empowering your business with AI, Cloud, and Digital Transformation services",
    url: 'https://your-domain.com',
    siteName: 'TechCerv',
    images: [
      {
        url: '/icon.png', // Use a PNG/JPG image for better compatibility
        width: 1200,
        height: 630,
        alt: 'TechCerv Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechCerv - AI, Cloud & Digital Transformation",
    description: "Empowering your business with AI, Cloud, and Digital Transformation services",
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
