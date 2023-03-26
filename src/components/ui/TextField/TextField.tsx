import React, { ChangeEvent } from "react";
import styles from "./style.module.scss";
import CurrencyInput from "react-currency-input-field";

interface IBaseTextField {
    label?: string;
    type?: "number" | "string";
}

interface INumberTextField extends IBaseTextField {
    value: number;
    onChange: (value: number) => void;
    type: "number";
    endAdornment?: string;
}

type ITextFieldProps = INumberTextField;

const TextField = (props: ITextFieldProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (props.type === "number") {
            const number = Number(
                value
                    .replace(/\s+/g, "")
                    .replace("-", "")
                    .replace(props.endAdornment ?? "", ""),
            );
            if (!isNaN(number)) {
                props.onChange(number);
            }
        }
    };

    const getValue = () => {
        if (props.type === "number") {
            let value = props.value.toLocaleString();
            if (props.endAdornment) {
                value += ` ${props.endAdornment}`;
            }
            return value;
        }
    };

    return (
        <div className={styles.container}>
            {props.label && <div className={styles.label}>{props.label}</div>}
            <CurrencyInput
                className={styles.input}
                value={props.value}
                defaultValue={0}
                onValueChange={(value) => {
                    console.log(value);
                    props.onChange(Number(value ?? "0"));
                }}
                suffix={" " + props.endAdornment}
            />
        </div>
    );
};

export default TextField;
