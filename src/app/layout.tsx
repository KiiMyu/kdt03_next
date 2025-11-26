import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-digital 3기",
  description: "부산대학교 디지털 웹 교육 25년 3기입니다.",
};

interface PageMapItem {
  name: string;
  url: string;
  isHide?: boolean;
}

  const pageMap : PageMapItem[] = [
    { name: "로그인", url: "/", isHide: false},
    { name: "로또", url: "/lotto", isHide: false },
    { name: "축제정보", url: "/festival", isHide: false },
    { name: "festivalcontent", url: "/festival/content", isHide: true },
    { name: "TodoList", url: "/todo" , isHide: false},
  ];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='w-full h-screen flex flex-col grow overflow-y-hidden'>
          <Header pageMap={pageMap}/>
          <main className='flex flex-col overflow-auto h-full'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
