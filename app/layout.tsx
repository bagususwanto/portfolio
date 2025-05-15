import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Bagus Uswanto",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <main className="bg-gradient-to-br from-indigo-100 from-50% to-primary to-50% dark:from-gray-900 dark:to-gray-800 h-screen w-screen flex flex-row items-center justify-center gap-8 p-4 pointer-events-none">
            <Sidebar />
            <Content>{children}</Content>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
