import type { Metadata } from "next";
import { font } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Yandex Taxi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  );
}