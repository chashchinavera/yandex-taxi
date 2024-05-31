'use client'

import React, { useEffect, useState } from "react";
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
      <div style={{ width: '100vw', height: '100vh' }}>
        {isLoading ? <Loader /> : ''}
      </div>

    </div>
  )
};

export default Page;