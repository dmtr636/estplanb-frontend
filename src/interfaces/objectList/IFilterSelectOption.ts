import { ISelectOption } from "@/components/ui/Select/Select";

export interface IFilterSelectOption extends ISelectOption {
    filter: {
        [key: string]: string | number | boolean;
    };
}
