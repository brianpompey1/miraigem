// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // If you're using a custom font
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] }); // If you are using a custom font.

export const metadata: Metadata = {
  title: "MIRAI - Launching Soon", // Or a more general title
  description: "Your digital success story starts here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}