'use client'

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "./components/ui/Loader/Loader";
import { ReactNode } from "react";


interface LayoutProps {
  title: string;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => { setIsLoading(false) }, 4000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <main>
      <Script
        strategy='beforeInteractive'
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      />

      <div style={{ maxWidth: 480 }} className="mx-auto relative overflow-hidden">
        {isLoading ? <Loader /> : children}
      </div>
    </main>
  )
};

export default Layout;