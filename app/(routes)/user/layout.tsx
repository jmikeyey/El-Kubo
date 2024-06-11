import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Kubo",
  description:
    "El-Kubo Grill & Resto Bar -- We serve Chicken Inasal with Unlimited Rice, Beverages are also be offered",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-green-50">{children}</main>
      </body>
    </html>
  );
}
