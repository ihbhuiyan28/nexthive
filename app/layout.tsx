import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nexthive",
  description: "nexthive by ihbhuiyan28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
