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
        <div className='w-full h-screen flex flex-col overflow-y-hidden'>
          <Header pageMap={null}/>
          <main className='container mx-auto flex flex-col overflow-auto h-full'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
