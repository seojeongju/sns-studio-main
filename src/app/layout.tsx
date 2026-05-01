import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrightBean Studio | Social Media Management",
  description: "Next-generation open source social media management for creators and agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased selection:bg-indigo-500/30`}>
        <div className="glow-mesh" />
        {children}
      </body>
    </html>
  );
}

