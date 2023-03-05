import React, { ReactNode } from "react";
import Header from "@/components/layout/Header/Header";

const Layout = (props: { children: ReactNode }) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
};

export default Layout;
