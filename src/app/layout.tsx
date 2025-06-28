import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JS Home",
  description: "Japanese Software Engineer Club Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
