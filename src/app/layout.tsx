import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomad Coders",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen h-screen bg-black overflow-x-hidden">
        <Nav/>
          <main className="w-full h-[1200px] flex flex-col">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
