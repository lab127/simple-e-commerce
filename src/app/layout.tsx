import type { Metadata } from "next";
import { Blinker, Inter } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simple E-Commerce",
  description: "Next.js Online Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={blinker.className}>{children}</body>
    </html>
  );
}
