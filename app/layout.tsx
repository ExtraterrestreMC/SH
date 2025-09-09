import type { Metadata } from "next";

import "./globals.css";



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
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
