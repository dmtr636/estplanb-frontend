import React, { useState } from "react";
import styles from "./style.module.scss";
import Chevron from "@/assets/icons/chevron.svg";
import classNames from "classnames";
import { useDocumentClick } from "@/hooks/useDocumentClick";
import TextField from "@/components/ui/TextField/TextField";

interface IRangePickerProps {
    fromValue: number;
    toValue: number;
    onChangeFromValue: (value: number) => void;
    onChangeToValue: (value: number) => void;
    title: string;
    classes?: {
        header?: string;
        dropdown?: string;
    };
}

const RangePicker = (props: IRangePickerProps) => {
    const [isOpen, setOpen] = useState(false);
    useDocumentClick(() => setOpen(false));

    return (
        <div
            className={styles.container}
            onClick={(event) => event.stopPropagation()}
        >
            <button
                className={classNames(styles.select, props.classes?.header, {
                    [styles.open]: isOpen,
                })}
                onClick={() => setOpen(!isOpen)}
            >
                {props.title}
                <Chevron
                    className={classNames(styles.chevron, {
                        [styles.open]: isOpen,
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
                    <TextField
                        value={props.fromValue}
                        onChange={(value) => props.onChangeFromValue(value)}
                        type={"number"}
                        label={"От"}
                        endAdornment={"₽"}
                    />
                    <TextField
                        value={props.toValue}
                        onChange={(value) => props.onChangeToValue(value)}
                        type={"number"}
                        label={"До"}
                    />
                </div>
            )}
        </div>
    );
};

export default RangePicker;
