import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Desi Leaked - Explore Latest Trends",
  description: "Desi Leaked is a platform crafted by an engineer to bring you the latest and most exclusive trends. Stay updated, stay ahead!",
  openGraph: {
    title: "Desi Leaked - Explore Latest Trends",
    description: "Your one-stop platform for trending content. Built by an engineer, crafted for the world.",
    url: "https://desileaked.com",
    siteName: "Desi Leaked",
    images: [
      {
        url: "/og-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Desi Leaked Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desi Leaked - Explore Latest Trends",
    description: "Discover the latest trends and updates on Desi Leaked.",
    site: "@yourTwitterHandle", // Replace with your Twitter username
    creator: "@yourTwitterHandle",
    images: ["/og-image.jpg"], // Replace with your image path
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="EKvEgJfWFyocMLM4X5WkNXIcmV2ECcMyR0Z5UiVMKUk" />
        {/* Essential Meta Tags */}
        <meta name="keywords" content="Desi Leaked, Trends, Latest News, Engineer Content, Exclusive Updates" />
        <meta name="author" content="Desi Leaked" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Desi Leaked - Explore Latest Trends" />
        <meta property="og:description" content="Your one-stop platform for trending content. Built by an engineer, crafted for the world." />
        <meta property="og:url" content="https://desileaked.com" />
        <meta property="og:site_name" content="Desi Leaked" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desi Leaked - Explore Latest Trends" />
        <meta name="twitter:description" content="Discover the latest trends and updates on Desi Leaked." />
        <meta name="twitter:image" content="/og-image.jpg" />

        <title>Desi Leaked - Explore Latest Trends</title>
        <link rel="canonical" href="https://desileaked.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
