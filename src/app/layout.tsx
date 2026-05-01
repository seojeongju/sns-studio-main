import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrightBean Studio | 소셜 미디어 관리",
  description: "크리에이터와 에이전시를 위한 차세대 오픈소스 소셜 미디어 관리 도구입니다.",
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

