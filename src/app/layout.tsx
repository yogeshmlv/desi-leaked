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
        <title>Desi Leaked - Latest Exclusive Content & Trending Entertainment | Watch Now</title>
        
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="EKvEgJfWFyocMLM4X5WkNXIcmV2ECcMyR0Z5UiVMKUk"
        />
        <meta name="robots" content="noindex, nofollow" />
  
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Discover exclusive Desi leaked content, trending entertainment, viral moments, and behind-the-scenes footage. Your #1 source for latest Indian entertainment updates and leaks." />
        <meta
          name="keywords"
          content="Desi Leaked, Indian entertainment, viral content, trending shows, exclusive leaks, behind the scenes, entertainment news, Bollywood leaks, desi entertainment"
        />
        <meta name="author" content="Desi Leaked" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#E21221" />
        
        {/* Language Alternatives */}
        <link rel="alternate" href="https://desileaked.com" hrefLang="x-default" />
        <link rel="alternate" href="https://desileaked.com" hrefLang="en" />

        {/* Open Graph Tags - Enhanced */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desi Leaked - Latest Exclusive Content & Trending Entertainment" />
        <meta property="og:description" content="Access premium leaked content, trending entertainment, and viral moments. Your ultimate destination for exclusive Desi entertainment updates and behind-the-scenes footage." />
        <meta property="og:url" content="https://desileaked.com" />
        <meta property="og:site_name" content="Desi Leaked" />
        <meta property="og:image" content="https://desileaked.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
  
        {/* Twitter Card Tags - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@desileaked" />
        <meta name="twitter:title" content="Desi Leaked - Latest Exclusive Content & Trending Entertainment" />
        <meta name="twitter:description" content="Access premium leaked content, trending entertainment, and viral moments. Your ultimate destination for exclusive Desi entertainment updates." />
        <meta name="twitter:image" content="https://desileaked.com/logo.png" />
        <meta name="twitter:image:alt" content="Desi Leaked Entertainment Platform" />
  
        {/* Structured Data (Schema.org) - Enhanced */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://desileaked.com",
            "name": "Desi Leaked",
            "description": "Your ultimate destination for exclusive Desi entertainment updates and leaked content.",
            "image": "https://desileaked.com/logo.png",
            "publisher": {
              "@type": "Organization",
              "name": "Desi Leaked",
              "logo": {
                "@type": "ImageObject",
                "url": "https://desileaked.com/logo.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://desileaked.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
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
  
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://desileaked.com/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );  
}