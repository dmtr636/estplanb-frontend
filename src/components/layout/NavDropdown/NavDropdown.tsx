import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import Chevron from "@/assets/icons/chevron.svg";
import styles from "./style.module.scss";
import Link from "next/link";

const NavDropdown = (props: {
    children: ReactNode;
    menu: { name: string; path: string }[];
}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <button
            className={classNames(styles.button, {
                [styles.open]: isOpen,
            })}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {props.children}
            <Chevron className={styles.chevron} />
            {isOpen && (
                <div className={styles.menuWrapper}>
                    <div className={styles.menu}>
                        {props.menu.map((link) => (
                            <Link
                                href={link.path}
                                className={styles.menuLink}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </button>
    );
};

export default NavDropdown;
