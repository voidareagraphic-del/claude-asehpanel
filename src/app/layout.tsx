import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ASEH Panel | Engineering Cold. Building the Future.",
  description:
    "One of Asia's largest sandwich panel manufacturers. High Index PIR technology, Fire Shield engineering, 12 million m² annual production capacity. ISO 9001:2014 certified.",
  keywords: [
    "sandwich panel",
    "PIR insulation",
    "cold storage panels",
    "clean room panels",
    "fire resistant panels",
    "industrial construction",
    "aseh panel",
    "insulated panels",
  ],
  authors: [{ name: "ASEH Panel" }],
  creator: "ASEH Panel",
  publisher: "ASEH Panel",
  metadataBase: new URL("https://asehpanel.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asehpanel.com",
    title: "ASEH Panel | Engineering Cold. Building the Future.",
    description:
      "One of Asia's largest sandwich panel manufacturers. High Index PIR technology, 12 million m² annual production capacity.",
    siteName: "ASEH Panel",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ASEH Panel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASEH Panel | Engineering Cold. Building the Future.",
    description: "One of Asia's largest sandwich panel manufacturers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-white antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

