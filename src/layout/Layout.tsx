import React, {ReactNode} from "react";

import {HeaderMain, HeaderSecondary} from "@/components";

type LayoutProps = {
    children: ReactNode,
    headerType: "main" | "secondary",
    activeNavBtn?: "about" | "products" | "upcoming",
}

const Layout: React.FC<LayoutProps> = ({children, headerType, activeNavBtn}) => {
    return (
        <>
            {headerType === "main" ? <HeaderMain /> : <HeaderSecondary activeNavBtn={activeNavBtn}/>}
            <main className="">{children}</main>
        </>
    );
}
 
export default Layout;
