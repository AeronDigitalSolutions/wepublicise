import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const editorial = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "WePublicise | Build Market Leaders",
  description:
    "Luxury technology-led growth partner for founders and brands moving from attention to category leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${inter.variable} ${editorial.variable}`}>
      <body suppressHydrationWarning className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
