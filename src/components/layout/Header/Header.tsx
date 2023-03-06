import React from "react";
import styles from "./style.module.scss";
import Logo from "@/assets/layout/header/logo.svg";
import PhoneIcon from "@/assets/layout/header/phone.svg";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import NavDropdown from "@/components/layout/NavDropdown/NavDropdown";

const Header = () => {
    const links = [
        {
            name: "Купить",
            path: "/",
            menu: [
                {
                    name: "Вторичная недвижимость",
                    path: "/",
                },
                {
                    name: "Новостройки",
                    path: "/",
                },
                {
                    name: "Дома",
                    path: "/",
                },
                {
                    name: "Участки",
                    path: "/",
                },
                {
                    name: "Комнаты",
                    path: "/",
                },
                {
                    name: "Коммерческая",
                    path: "/",
                },
            ],
        },
        {
            name: "Аренда",
            path: "/",
            menu: [
                {
                    name: "Посуточно",
                    path: "/",
                },
                {
                    name: "Долгосрочная аренда",
                    path: "/",
                },
            ],
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
                    {links.map((link) =>
                        link.menu ? (
                            <NavDropdown
                                key={link.name}
                                className={styles.navLink}
                                menu={link.menu}
                            >
                                {link.name}
                            </NavDropdown>
                        ) : (
                            <Link
                                href={link.path}
                                key={link.name}
                                className={styles.navLink}
                            >
                                {link.name}
                            </Link>
                        ),
                    )}
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
