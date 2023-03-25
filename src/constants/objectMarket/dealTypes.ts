import { IFilterSelectOption } from "@/interfaces/objectList/IFilterSelectOption";

export const dealTypes: IFilterSelectOption[] = [
    {
        name: "Покупка",
        value: "purchase",
        filter: {
            type__iexact: "продажа",
        },
    },
    {
        name: "Аренда",
        value: "rent",
        filter: {
            type__iexact: "аренда",
        },
    },
];
