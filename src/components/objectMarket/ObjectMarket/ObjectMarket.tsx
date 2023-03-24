import React from "react";
import styles from "./style.module.scss";
import { objectMarketStore } from "@/stores/objectMarketStore";
import { observer } from "mobx-react-lite";
import ObjectMarketHeader from "@/components/objectMarket/ObjectMarketHeader/ObjectMarketHeader";

const ObjectMarket = () => {
    const store = objectMarketStore;

    return (
        <div className={styles.layout}>
            <ObjectMarketHeader />
        </div>
    );
};

export default observer(ObjectMarket);
