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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Desi Leaked - Explore Latest Trends & Exclusive Content</title>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="EKvEgJfWFyocMLM4X5WkNXIcmV2ECcMyR0Z5UiVMKUk"
        />
  
        {/* Essential Meta Tags */}
        <meta
          name="keywords"
          content="Desi Leaked, Trending Movies, Latest News, Viral Content, Social Media Trends, Exclusive Updates, Breaking News, Desi Entertainment, Exclusive Leaked Content, Hot Topics"
        />
        <meta name="author" content="Desi Leaked" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
  
        {/* Open Graph Tags */}
        <meta property="og:title" content="Desi Leaked - Explore Latest Trends & Exclusive Content" />
        <meta
          property="og:description"
          content="Get access to exclusive leaked content and the hottest trending movies, shows, and viral topics – everything you need to stay ahead!"
        />
        <meta property="og:url" content="https://desileaked.com" />
        <meta property="og:site_name" content="Desi Leaked" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
  
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desi Leaked - Explore Latest Trends & Exclusive Content" />
        <meta
          name="twitter:description"
          content="Join Desi Leaked for the latest, hottest, and exclusive content. Don’t miss out on trending topics, viral hits, and behind-the-scenes leaks!"
        />
        <meta name="twitter:image" content="https://desileaked.com/info.webp" />
  
        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            "url": "https://desileaked.com",
            "name": "Desi Leaked",
            "description":
              "Get access to the latest and hottest content. Breaking news, trending movies, and exclusive leaks are just a click away!",
            "image": "https://desileaked.com/info.webp",
          })}
        </script>
  
        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
  
        {/* Canonical URL */}
        <link rel="canonical" href="https://desileaked.com" />
  
        {/* Favicon */}
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