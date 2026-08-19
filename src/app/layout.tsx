import type { Metadata } from "next";
import { Geist_Mono, Klee_One, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/design-system/lib/utils";
import { NotebookPage } from "@/design-system/notebook-page";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don't Buy 手帳",
  description: "買わない選択を、毎日書きとめよう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        notoSansJP.variable,
        kleeOne.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <NotebookPage>{children}</NotebookPage>
      </body>
    </html>
  );
}
