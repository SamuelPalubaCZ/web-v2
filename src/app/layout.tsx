import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingDock } from "@/components/layout/floating-dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkHome - Moderní IT bez starostí",
  description:
    "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
  metadataBase: new URL("https://thinkhome.org"),
  openGraph: {
    title: "ThinkHome - Moderní IT bez starostí",
    description:
      "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
    url: "https://thinkhome.org",
    siteName: "ThinkHome",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkHome - Moderní IT bez starostí",
    description:
      "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
