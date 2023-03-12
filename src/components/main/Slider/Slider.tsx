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
import { useSlides } from "@/hooks/useSlides";
import { url } from "@/helpers/url";
import Link from "next/link";

const Slider = () => {
    const { slides } = useSlides();

    const renderSlide = (slide: ISlide, index: number) => (
        <SwiperSlide
            key={index}
            className={classNames(styles.slide, {
                [styles.textLight]: slide.text_color === "light",
            })}
        >
            {slide.image && (
                <Image
                    src={url(slide.image)}
                    alt={""}
                    fill={true}
                    style={{ zIndex: "-1", objectFit: "cover" }}
                    priority={index === 0}
                />
            )}
            <h1 className={styles.header}>{slide.header}</h1>
            <div className={styles.text}>{slide.text}</div>
            {slide.button_link && (
                <div className={styles.button}>
                    <Link href={slide.button_link}>
                        <Button>{slide.button_text}</Button>
                    </Link>
                </div>
            )}
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
                {slides?.map(renderSlide)}
            </Swiper>
        </div>
    );
};

export default Slider;
