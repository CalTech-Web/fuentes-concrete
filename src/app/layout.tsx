import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuentes Concrete Inc. - Custom Concrete Work in Madera & Central Valley",
  description:
    "Family owned and operated concrete company in Madera, California. 25+ years serving the Central Valley with custom concrete work. Call (559) 673-6444.",
  keywords: [
    "concrete contractor",
    "Madera",
    "Fresno",
    "Clovis",
    "Central Valley",
    "custom concrete work",
    "concrete company",
    "Visalia",
    "Merced",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://fuentes-concrete.vercel.app"),
  openGraph: {
    title: "Fuentes Concrete Inc. - Custom Concrete Work",
    description:
      "Family owned concrete company with 25+ years of experience serving the Central Valley. Madera, Fresno, Clovis, Visalia, and more.",
    url: "https://fuentes-concrete.vercel.app",
    siteName: "Fuentes Concrete Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuentes Concrete Inc. - Custom Concrete Work",
    description:
      "Family owned concrete company with 25+ years of experience serving the Central Valley.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fuentes Concrete Inc.",
  description:
    "Family owned and operated concrete company serving the Central Valley with custom concrete work.",
  url: "https://fuentes-concrete.vercel.app",
  telephone: "(559) 673-6444",
  faxNumber: "(559) 674-0377",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2370 W Cleveland Ave Ste. 108 #141",
    addressLocality: "Madera",
    addressRegion: "CA",
    postalCode: "93637",
    addressCountry: "US",
  },
  areaServed: [
    "Madera",
    "Fresno",
    "Clovis",
    "Visalia",
    "Merced",
    "Modesto",
    "Bass Lake",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
