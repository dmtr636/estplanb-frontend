import React from "react";
import styles from "./style.module.scss";

const ObjectListItemSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                {[...Array(3)].map((_, index) => (
                    <div className={styles.skeletonImage} key={index} />
                ))}
            </div>
            <div>
                <div className={styles.title}>Загрузка ...</div>
            </div>
        </div>
    );
};

export default ObjectListItemSkeleton;
