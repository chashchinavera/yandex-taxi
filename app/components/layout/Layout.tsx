import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import Head from "next/head";

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
            </Head>
        </div>
    )
};

export default Layout;