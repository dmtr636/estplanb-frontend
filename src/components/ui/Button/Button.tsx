import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";

const Button = (props: {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    icon?: ReactNode;
    size?: "small" | "medium";
    variant?: "contained" | "outlined";
}) => {
    if (props.href) {
        return (
            <Link href={props.href} className={styles.button}>
                {props.children}
            </Link>
        );
    } else {
        return (
            <button
                className={classNames(styles.button, {
                    [styles.small]: props.size === "small",
                    [styles.outlined]: props.variant === "outlined",
                })}
                onClick={props.onClick}
            >
                {props.icon}
                {props.children}
            </button>
        );
    }
};

export default Button;
