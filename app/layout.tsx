import type { Metadata } from "next";
import "./globals.css";

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
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
