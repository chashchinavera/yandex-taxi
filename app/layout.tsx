import type { Metadata } from "next";
import { font } from './fonts';
import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Yandex Taxi",
  description: "Вызов такси с наилучшим маршрутом",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Script
          strategy='beforeInteractive'
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
        />
        <div className="mx-auto relative overflow-hidden">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
