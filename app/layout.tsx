import "./global.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Anthony Molina",
    template: "%s | LT",
  },
  description: "Designer & Developer based in Atlanta, Georgia",
  openGraph: {
    title: "Anthony Molina",
    description: "Explore my work.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body>
        <div
          id="site"
          className="antialiased md:max-w-2xl lg:max-w-4xl mx-4 mt-8 md:mx-auto"
        >
          <Providers>
            <header>
              <Navbar />
            </header>
            <main className="flex-auto min-w-0 lg:pt-16  pb-16  flex flex-col px-2 md:px-0">
              {children}
            </main>
            <Analytics />
            <SpeedInsights />
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
