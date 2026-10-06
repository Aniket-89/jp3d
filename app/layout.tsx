import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Extrudia | 3D Printing & Rapid Prototyping in Ghaziabad",
  description:
    "Extrudia offers 3D printing, rapid prototyping, laser cutting, and product design in Sahibabad, Ghaziabad. Upload a file for a quote.",
  openGraph: {
    title: "Extrudia | 3D Printing & Rapid Prototyping in Ghaziabad",
    description:
      "Extrudia offers 3D printing, rapid prototyping, laser cutting, and product design in Sahibabad, Ghaziabad. Upload a file for a quote.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extrudia | 3D Printing & Rapid Prototyping in Ghaziabad",
    description:
      "Extrudia offers 3D printing, rapid prototyping, laser cutting, and product design in Sahibabad, Ghaziabad. Upload a file for a quote.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Extrudia",
  email: "hello.extrudia@gmail.com",
  areaServed: ["Sahibabad", "Ghaziabad", "Noida", "Greater Noida", "Delhi NCR", "India"],
  services: services.map((service) => service.name),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow focus:px-3 focus:py-2 focus:border-[3px] focus:border-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
