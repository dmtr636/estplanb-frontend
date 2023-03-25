import React from "react";
import styles from "./style.module.scss";
import LocationIcon from "@/assets/icons/location.svg";
import MailIcon from "@/assets/layout/topPanel/mail.svg";
import PhoneIcon from "@/assets/layout/topPanel/phone.svg";
import classNames from "classnames";

const TopPanel = () => {
    return (
        <div className={styles.topPanel}>
            <div className={styles.content}>
                <div className={classNames(styles.block, styles.left)}>
                    <a
                        className={styles.linkItem}
                        href={"https://yandex.ru/maps/-/CCUKJJRoDA"}
                        target={"_blank"}
                    >
                        <LocationIcon />
                        <div className={styles.text}>
                            Калуга, Дзержинского, 29А
                        </div>
                    </a>
                    <a
                        className={styles.linkItem}
                        href={"mailto:info@estplanb.ru"}
                    >
                        <MailIcon />
                        <div className={styles.text}>info@estplanb.ru</div>
                    </a>
                </div>
                <div className={classNames(styles.block, styles.right)}>
                    <a
                        className={classNames(styles.linkItem, styles.right)}
                        href={"tel:+74842400402"}
                    >
                        <PhoneIcon />
                        <div className={styles.text}>+7 (4842) 400-402</div>
                    </a>
                    <a className={styles.linkItem} href={"tel:*1402"}>
                        <PhoneIcon />
                        <div className={styles.text}>
                            <span className={styles.star}>*</span> 1402
                        </div>
                    </a>
                    <div className={styles.divider} />
                    <div className={styles.text}>Звонок бесплатный</div>
                </div>
            </div>
        </div>
    );
};

export default TopPanel;
