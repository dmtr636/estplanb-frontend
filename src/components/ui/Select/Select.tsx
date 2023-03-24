import React, { useState } from "react";
import styles from "./style.module.scss";
import Chevron from "@/assets/icons/chevronMedium.svg";
import classNames from "classnames";
import { useDocumentClick } from "@/hooks/useDocumentClick";

export interface ISelectOption {
    name: string;
}

const Select = <T extends ISelectOption>(props: {
    options: T[];
    selectedOption: T;
    onChange: (option: T) => void;
    className?: string;
}) => {
    const [isOpen, setOpen] = useState(false);
    useDocumentClick(() => setOpen(false));

    const handleChange = (option: T) => {
        props.onChange(option);
        setOpen(false);
    };

    return (
        <div
            className={styles.container}
            onClick={(event) => event.stopPropagation()}
        >
            <button
                className={classNames(styles.select, props.className)}
                onClick={() => setOpen(!isOpen)}
            >
                {props.selectedOption.name}
                <Chevron
                    className={classNames(styles.chevron, {
                        [styles.open]: isOpen,
                    })}
                />
            </button>
            {isOpen && (
                <div className={styles.dropdown}>
                    {props.options.map((option) => (
                        <button
                            className={styles.menuLink}
                            onClick={() => handleChange(option)}
                            key={option.name}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
