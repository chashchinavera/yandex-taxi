import React, { useState } from "react";
import { ReactNode } from "react";

interface LayoutProps {
    title: string;
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    const [isLoading, setLoading] = useState(false);

    return (
        <div>{children}</div>
    )
};

export default Layout;