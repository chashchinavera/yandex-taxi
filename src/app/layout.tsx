import type { Metadata } from "next";
import { font } from './fonts';
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Yandex Taxi",
  description: "Вызов такси с наилучшим маршрутом",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
