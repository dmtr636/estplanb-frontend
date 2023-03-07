import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./style.module.scss";
import Button from "@/components/ui/Button/Button";
import { PaginationOptions } from "swiper/types";
import Image from "next/image";
import classNames from "classnames";

const slides = [
    {
        header: "Местоположение заголовка названия слайдера",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        bgColor: "light",
    },
    {
        header: "Эксперт месяца",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1554310212-e1d9f0d4d9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        bgColor: "light",
    },
    {
        header: "Заголовок очень большой прям зачем такой делать не\xA0знаю, но мало ли",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1531704118376-ec637130bfa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        bgColor: "dark",
    },
];

const Slider = () => {
    const pagination: PaginationOptions = {
        clickable: true,
        horizontalClass: styles.pagination,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.active,
        renderBullet: (_, className: string) => {
            return `<div class="${className}"></div>`;
        },
    };

    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className={styles.slider}
                loop={true}
                autoplay={{ delay: 4000 }}
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.header}
                        className={classNames(styles.slide, {
                            [styles.bgDark]: slide.bgColor === "dark",
                        })}
                    >
                        {slide.bgUrl && (
                            <Image
                                src={slide.bgUrl}
                                alt={""}
                                fill={true}
                                style={{ zIndex: "-1", objectFit: "cover" }}
                            />
                        )}
                        <h1 className={styles.header}>{slide.header}</h1>
                        <div className={styles.text}>{slide.text}</div>
                        <div className={styles.button}>
                            <Button>{slide.buttonText}</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
