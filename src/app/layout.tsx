import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atharvajibhakate.com"),
  title: {
    default: "Atharva Jibhakate | Senior Data Engineer",
    template: "%s | Atharva Jibhakate",
  },
  description:
    "Atharva Jibhakate is a Senior Data Engineer specializing in scalable data platforms, Apache Spark, Databricks, and modern Lakehouse architectures.",
  applicationName: "Atharva Jibhakate Portfolio",
  authors: [{ name: "Atharva Jibhakate" }],
  creator: "Atharva Jibhakate",
  keywords: [
    "Atharva Jibhakate",
    "Senior Data Engineer",
    "Apache Spark",
    "Databricks",
    "Lakehouse",
    "Data Engineering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atharvajibhakate.com",
    siteName: "Atharva Jibhakate",
    title: "Atharva Jibhakate | Senior Data Engineer",
    description:
      "Turning raw data into reliable systems with scalable data platforms, Apache Spark, Databricks, and modern Lakehouse architectures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Jibhakate | Senior Data Engineer",
    description:
      "Senior Data Engineer specializing in scalable data platforms, Apache Spark, Databricks, and modern Lakehouse architectures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${inter.variable}`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
