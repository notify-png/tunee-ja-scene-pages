import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  DM_Sans,
  Playfair_Display,
  JetBrains_Mono,
  Outfit,
  Cormorant_Garamond,
} from "next/font/google";
// DotGothic16 is loaded via Google Fonts link tag in head
// as it may not be in next/font/google package
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tunee.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${dmSans.variable} ${playfair.variable} ${jetbrains.variable} ${outfit.variable} ${cormorant.variable}`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans" style={{ fontVariantLigatures: "none" }}>{children}</body>
    </html>
  );
}
