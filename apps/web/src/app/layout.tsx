import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Voice Nest App",
  description: "A social media application that lets you connect with other developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-indigo-50'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
