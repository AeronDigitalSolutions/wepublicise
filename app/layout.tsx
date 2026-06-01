import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
    <html suppressHydrationWarning lang="en" className={rubik.variable}>
      <body suppressHydrationWarning className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
