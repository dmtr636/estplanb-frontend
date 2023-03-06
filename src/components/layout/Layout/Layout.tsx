import React, { ReactNode } from "react";
import Header from "@/components/layout/Header/Header";
import TopPanel from "@/components/layout/TopPanel/TopPanel";
import styles from "./style.module.scss";

const Layout = (props: { children: ReactNode }) => {
    return (
        <div className={styles.layout}>
            <TopPanel />
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
