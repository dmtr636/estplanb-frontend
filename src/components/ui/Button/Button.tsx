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
    const size = props.size ?? "medium";
    const variant = props.variant ?? "contained";

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
                    [styles.small]: size === "small",
                    [styles.medium]: size === "medium",
                    [styles.contained]: variant === "contained",
                    [styles.outlined]: variant === "outlined",
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
