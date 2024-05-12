'use client'

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "../shared/ui/Loader/Loader";
import { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
};

const Page: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => { setIsLoading(false) }, 2500);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <div>
      <Script
        strategy='beforeInteractive'
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      />

      <div style={{width: '100vw', height: '100vh'}} className="mx-auto relative overflow-hidden">
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  )
};

export default Page;