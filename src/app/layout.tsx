import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "Rick and Morty characters, locations and episodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "text-black bg-white dark:text-white dark:bg-[#121212] max-w-5xl mx-2 lg:mx-auto min-h-screen",
          inter.className
        )}
      >
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
