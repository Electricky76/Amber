import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const ui = Outfit({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600"],
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ambermorrillevents.com"),
  title: {
    default: "Amber Morrill Events | Luxury Event Planning",
    template: "%s | Amber Morrill Events",
  },
  description:
    "Boutique event planning that blends elegance, personality, and seamless execution—so you can be fully present in every moment. Texas & beyond.",
  openGraph: {
    title: "Amber Morrill Events",
    description:
      "Intentional design. Seamless execution. Celebrations remembered for a lifetime.",
    url: "https://ambermorrillevents.com",
    siteName: "Amber Morrill Events",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${ui.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body">{children}</body>
    </html>
  );
}
