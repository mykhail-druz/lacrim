import React, {ReactNode} from "react";

import {HeaderMain, HeaderSecondary} from "@/components";

type LayoutProps = {
    children: ReactNode,
    headerType: "main" | "secondary",
}

const Layout: React.FC<LayoutProps> = ({children, headerType}) => {
    return (
        <>
            {headerType === "main" ? <HeaderMain /> : <HeaderSecondary />}
            <main className="">{children}</main>
        </>
    );
}
 
export default Layout;
