import styles from "./style.module.scss";

import React from "react";
import { observer } from "mobx-react-lite";
import { IObjectListItem } from "@/interfaces/objectList/IObjectListItem";
import Image from "next/image";
import placeholder from "@/assets/objects/placeholder.jpg";
import LocationIcon from "@/assets/icons/location.svg";
import classNames from "classnames";

const ObjectListItem = (props: { object: IObjectListItem; index: number }) => {
    const { object, index } = props;
    const data = object.data;

    const getTitle = () => {
        const rooms = data.rooms && `${data.rooms}-комн. `;
        const category = `${data.category}`;
        const area = data.area && (
            <>
                , {data.area.value} м<sup className={styles.sup}>2</sup>,{" "}
            </>
        );
        const floor =
            data.floor && `${data.floor}/${data["floors-total"]} этаж`;
        return (
            <>
                {rooms}
                {category}
                {area}
                {floor}
            </>
        );
    };

    const getImages = () => {
        if (data.image) {
            if (Array.isArray(data.image)) {
                return data.image;
            }
            return [data.image];
        }
        return [placeholder.src, placeholder.src];
    };

    const images = getImages();

    const getAddress = () => {
        const localityName = data.location["locality-name"]
            .replace(" г.", "")
            .replace(" п.", "")
            .replace(" с.", "");
        const address =
            data.location.address &&
            `, ул. ${data.location.address.toString().replace(" ул.", "")}`;
        return `${localityName}${address}`;
    };

    const article = data.description.split(" ").slice(0, 2).join(" ");
    const description =
        data.description
            .replace(/(<([^>]+)>)/gi, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, " ")
            .split(" ")
            .slice(2, 40)
            .join(" ") + "...";

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                {images.slice(0, 2).map((src) => (
                    <div className={styles.image} key={src}>
                        <Image
                            src={src}
                            alt={""}
                            fill={true}
                            priority={index === 0}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
                <div className={styles.image}>
                    <Image
                        src={placeholder}
                        alt={""}
                        fill={true}
                        priority={index === 0}
                        style={{ objectFit: "cover" }}
                    />
                    {images.length > 2 && (
                        <div className={styles.placeholderText}>
                            +{images.length - 2}
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className={styles.title}>{getTitle()}</div>
                <div className={styles.address}>
                    <LocationIcon />
                    {getAddress()}
                </div>
                <div className={classNames(styles.description, styles.article)}>
                    {article}
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default observer(ObjectListItem);
