import React from "react";
import styles from "./style.module.scss";
import Logo from "@/assets/layout/header/logo.svg";
import PhoneIcon from "@/assets/layout/header/phone.svg";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

const Header = () => {
    const links = [
        {
            name: "Купить",
            path: "/",
        },
        {
            name: "Аренда",
            path: "/",
        },
        {
            name: "Продать",
            path: "/",
        },
        {
            name: "Ипотека",
            path: "/",
        },
        {
            name: "3D-туры",
            path: "/",
        },
        {
            name: "Карьера",
            path: "/",
        },
        {
            name: "Партнёры",
            path: "/",
        },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link href={"/"} className={styles.logo}>
                    <Logo />
                </Link>
                <nav className={styles.nav}>
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            key={link.name}
                            className={styles.navLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className={styles.button}>
                    <Button
                        icon={<PhoneIcon />}
                        size={"small"}
                        variant={"outlined"}
                    >
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
