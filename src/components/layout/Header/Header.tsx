import React from "react";
import styles from "./style.module.scss";
import Logo from "@/assets/layout/header/logo.svg";
import PhoneIcon from "@/assets/layout/header/phone.svg";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import NavDropdown from "@/components/layout/NavDropdown/NavDropdown";
import { navRoutes } from "@/routes/navRoutes";
import { useRouter } from "next/router";
import classNames from "classnames";

const Header = () => {
    const router = useRouter();

    const isActive = (route: { path: string }) => {
        return route.path === router.pathname;
    };

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link href={"/"} className={styles.logo}>
                    <Logo />
                </Link>
                <nav className={styles.nav}>
                    {navRoutes.map((route) =>
                        route.menu ? (
                            <NavDropdown
                                key={route.name}
                                className={styles.navLink}
                                menu={route.menu}
                            >
                                {route.name}
                            </NavDropdown>
                        ) : (
                            <Link
                                href={route.path}
                                key={route.name}
                                className={classNames(styles.navLink, {
                                    [styles.active]: isActive(route),
                                })}
                            >
                                {route.name}
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
