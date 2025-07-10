import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS Home",
  description: "Japanese Software Engineer Club Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`${openSans.className}`, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
