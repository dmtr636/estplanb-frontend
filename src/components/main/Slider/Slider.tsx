import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./style.module.scss";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import classNames from "classnames";
import { ISlide } from "@/interfaces/ISlide";

const slides: ISlide[] = [
    {
        header: "Местоположение заголовка названия слайдера",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        textColor: "dark",
    },
    {
        header: "Эксперт месяца",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1554310212-e1d9f0d4d9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        textColor: "dark",
    },
    {
        header: "Заголовок очень большой прям зачем такой делать не\xA0знаю, но мало ли",
        text: "Текст, который будет находится в контейнере слайдера",
        buttonText: "Кнопка действия",
        bgUrl: "https://images.unsplash.com/photo-1531704118376-ec637130bfa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        textColor: "light",
    },
];

const Slider = () => {
    const renderSlide = (slide: ISlide, index: number) => (
        <SwiperSlide
            key={slide.header}
            className={classNames(styles.slide, {
                [styles.textLight]: slide.textColor === "light",
            })}
        >
            {slide.bgUrl && (
                <Image
                    src={slide.bgUrl}
                    alt={""}
                    fill={true}
                    style={{ zIndex: "-1", objectFit: "cover" }}
                    priority={index === 0}
                />
            )}
            <h1 className={styles.header}>{slide.header}</h1>
            <div className={styles.text}>{slide.text}</div>
            <div className={styles.button}>
                <Button>{slide.buttonText}</Button>
            </div>
        </SwiperSlide>
    );

    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    horizontalClass: styles.pagination,
                    bulletClass: styles.bullet,
                    bulletActiveClass: styles.active,
                }}
                className={styles.slider}
                loop={true}
                autoplay={{ delay: 4000 }}
            >
                {slides.map(renderSlide)}
            </Swiper>
        </div>
    );
};

export default Slider;
