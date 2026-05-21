import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-label font-normal">{children}</body>
    </html>
  );
}
