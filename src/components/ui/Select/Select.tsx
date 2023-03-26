import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import Chevron from "@/assets/icons/chevron.svg";
import classNames from "classnames";
import { useDocumentClick } from "@/hooks/useDocumentClick";
import CheckIcon from "@/assets/icons/check.svg";
import { useOnClickOutside } from "@/hooks/useOnClickOuside";

export interface ISelectOption {
    name: string;
    value: string;
}

interface IBaseSelect<T> {
    options: T[];
    classes?: {
        select?: string;
        dropdown?: string;
    };
    multiple?: boolean;
    size?: "small" | "medium";
    variant?: "filled" | "outlined";
}

interface ISingleSelect<T> extends IBaseSelect<T> {
    selectedOption: T;
    onChange: (option: T) => void;
    multiple?: false;
}

interface IMultipleSelect<T> extends IBaseSelect<T> {
    title: string;
    selectedOptions: T[];
    onChange: (options: T[]) => void;
    multiple: true;
}

type ISelectProps<T> = ISingleSelect<T> | IMultipleSelect<T>;

const Select = <T extends ISelectOption>(props: ISelectProps<T>) => {
    const [isOpen, setOpen] = useState(false);
    const ref = useOnClickOutside(() => setOpen(false));

    const handleChange = (option: T) => {
        if (props.multiple) {
            if (isSelected(option)) {
                props.onChange(
                    props.selectedOptions.filter(
                        (selectedOption) =>
                            selectedOption.value !== option.value,
                    ),
                );
            } else {
                props.onChange([...props.selectedOptions, option]);
            }
        } else {
            props.onChange(option);
            setOpen(false);
        }
    };

    const isSelected = (option: T) => {
        return (
            props.multiple &&
            props.selectedOptions.find((item) => item.value === option.value)
        );
    };

    const getMenuItem = (option: T) => {
        return (
            <button
                className={styles.menuLink}
                onClick={() => handleChange(option)}
                key={option.name}
            >
                {props.multiple && (
                    <div
                        className={classNames(styles.checkbox, {
                            [styles.checked]: isSelected(option),
                        })}
                    >
                        {isSelected(option) && <CheckIcon />}
                    </div>
                )}
                {option.name}
            </button>
        );
    };

    return (
        <div className={styles.container} ref={ref}>
            <button
                className={classNames(styles.select, props.classes?.select, {
                    [styles.small]: props.size === "small",
                    [styles.outlined]: props.variant === "outlined",
                    [styles.open]: isOpen,
                })}
                onClick={() => setOpen(!isOpen)}
            >
                {props.multiple ? props.title : props.selectedOption.name}
                <Chevron
                    className={classNames(styles.chevron, {
                        [styles.open]: isOpen,
                        [styles.small]: props.size === "small",
                    })}
                />
            </button>
            {isOpen && (
                <div
                    className={classNames(
                        styles.dropdown,
                        props.classes?.dropdown,
                    )}
                >
                    {props.options.map((option) => getMenuItem(option))}
                </div>
            )}
        </div>
    );
};

export default Select;
