import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Falcon Student Investment Fund - UAE's first student investment fund",
  description:
    "Falcon Student Investment Fund, a Abu Dhabi-based student investment fund managing a simulated portfolio of stocks worth $100K, helps students learn about long-term investing and gain hands-on experience.",
  generator: "FSIF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
