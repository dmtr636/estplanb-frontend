import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./style.module.scss";
import Select from "@/components/ui/Select/Select";
import { roomCountOptions } from "@/constants/objectMarket/roomCountOptions";
import { objectListStore } from "@/stores/objectListStore";

const ObjectListSearchPanel = () => {
    const store = objectListStore;

    return (
        <div className={styles.searchPanel}>
            <Select
                title={"Количество комнат"}
                options={roomCountOptions}
                selectedOptions={store.roomNumbers}
                onChange={(options) => store.setRoomNumbers(options)}
                multiple={true}
                classes={{
                    select: styles.selectRoomNumbers,
                    dropdown: styles.selectRoomNumbersDropdown,
                }}
                size={"small"}
                variant={"outlined"}
            />
            <div className={styles.bottomStripe} />
        </div>
    );
};

export default observer(ObjectListSearchPanel);
