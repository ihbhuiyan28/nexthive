import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from './providers';

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
      <body className={`container mx-auto antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
