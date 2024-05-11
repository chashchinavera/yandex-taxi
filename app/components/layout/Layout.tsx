import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";


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
        <div>
            <Head>
                <title>{title} | Yandex Taxi</title>
                <meta name="description" content="Taxi App" />
            </Head>

            <Script
                strategy='beforeInteractive'
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
            />

            <div style={{ maxWidth: 480 }} className="mx-auto relative overflow-hidden">

            </div>
        </div>
    )
};

export default Layout;