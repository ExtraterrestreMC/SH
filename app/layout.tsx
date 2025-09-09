import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Silent hill 2 Remake",
  description: "Regalo Marisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
