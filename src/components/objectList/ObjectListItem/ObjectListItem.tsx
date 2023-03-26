import styles from "./style.module.scss";

import React from "react";
import { observer } from "mobx-react-lite";
import { IObjectListItem } from "@/interfaces/objectList/IObjectListItem";
import Image from "next/image";
import placeholder from "@/assets/objects/placeholder.jpg";
import LocationIcon from "@/assets/icons/location.svg";
import PhoneSmallIcon from "@/assets/icons/phoneSmall.svg";
import classNames from "classnames";

function formatPhoneNumber(phoneNumberString: string) {
    console.log(phoneNumberString);
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        const intlCode = match[1] ? "+7 " : "";
        return [
            intlCode,
            "(",
            match[2],
            ") ",
            match[3],
            "-",
            match[4],
            "-",
            match[5],
        ].join("");
    }
    return null;
}

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

    const getUnitPrice = () => {
        const area = Number(data.area?.value);
        if (area) {
            const price = data.price.value;
            return Math.round(price / area / 1000) * 1000;
        }
    };

    const unitPrice = getUnitPrice();

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
            <div className={styles.info}>
                <div className={styles.title}>{getTitle()}</div>
                <div className={styles.address}>
                    <LocationIcon />
                    {getAddress()}
                </div>
                <div className={classNames(styles.description, styles.article)}>
                    {article}
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.bottom}>
                    <div className={styles.agent}>
                        <div className={styles.agentPhoto}>
                            <Image
                                src={data["sales-agent"].photo}
                                alt={""}
                                fill={true}
                            />
                        </div>
                        <div>
                            <div className={styles.agentName}>
                                {data["sales-agent"].name}
                            </div>
                            <div className={styles.agentType}>Агент</div>
                            <div className={styles.agentPhone}>
                                <PhoneSmallIcon />
                                {formatPhoneNumber(data["sales-agent"].phone)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.price}>
                            {data.price.value.toLocaleString()} ₽
                        </div>
                        <div className={styles.unitPrice}>
                            {unitPrice} ₽ / м<sup className={styles.sup}>2</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(ObjectListItem);
