import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
      className={`${cormorant.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="font-prose min-h-full">{children}</body>
    </html>
  );
}
