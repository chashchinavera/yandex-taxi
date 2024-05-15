'use client'

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Loader from "../src/shared/ui/Loader/Loader";


const Page: React.FC = () => {
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
        {isLoading ? <Loader /> : ''}
      </div>

    </div>
  )
};

export default Page;