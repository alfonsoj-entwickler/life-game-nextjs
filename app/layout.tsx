import "./globals.css";
import type { Metadata } from "next";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Life Game",
  description: "Playing with cells",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bangers.className} relative flex h-screen flex-col items-center justify-between bg-animate overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
