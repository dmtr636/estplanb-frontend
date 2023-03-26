import React from "react";
import styles from "./style.module.scss";
import { objectListStore } from "@/stores/objectListStore";
import { observer } from "mobx-react-lite";
import ObjectMarketHeader from "@/components/objectList/ObjectListHeader/ObjectListHeader";
import { useObjects } from "@/hooks/useObjects";
import ObjectListItem from "@/components/objectList/ObjectListItem/ObjectListItem";
import ObjectListItemSkeleton from "@/components/objectList/ObjectListItem/ObjectListItemSkeleton";
import ObjectListSearchPanel from "@/components/objectList/ObjectListSearchPanel/ObjectListSearchPanel";

const ObjectList = () => {
    const store = objectListStore;

    const { objects, isLoading } = useObjects();

    return (
        <div className={styles.layout}>
            <ObjectMarketHeader />
            <ObjectListSearchPanel />
            <div className={styles.list}>
                {/*<ObjectListItemSkeleton />*/}
                {isLoading && (
                    <>
                        <ObjectListItemSkeleton />
                        <ObjectListItemSkeleton />
                        <ObjectListItemSkeleton />
                    </>
                )}
                {objects?.map((object, index) => (
                    <ObjectListItem
                        object={object}
                        index={index}
                        key={object.internal_id}
                    />
                ))}
            </div>
        </div>
    );
};

export default observer(ObjectList);
