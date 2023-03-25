import React from "react";
import styles from "./style.module.scss";
import Select from "@/components/ui/Select/Select";
import { objectCategories } from "@/constants/objectMarket/objectCategories";
import { objectListStore } from "@/stores/objectListStore";
import { observer } from "mobx-react-lite";
import { dealTypes } from "@/constants/objectMarket/dealTypes";

const ObjectListHeader = () => {
    const store = objectListStore;

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                {store.dealType.value === "rent"
                    ? "Снять недвижимость в Калуге"
                    : "Купить недвижимость в Калуге"}
            </div>
            <div className={styles.filters}>
                <Select
                    options={objectCategories}
                    selectedOption={store.category}
                    onChange={(option) => store.setCategory(option)}
                    className={styles.selectCategory}
                />
                <Select
                    options={dealTypes}
                    selectedOption={store.dealType}
                    onChange={(option) => store.setDealType(option)}
                    className={styles.selectDealType}
                />
            </div>
        </div>
    );
};

export default observer(ObjectListHeader);
