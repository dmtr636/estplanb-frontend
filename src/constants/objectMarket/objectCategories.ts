import { IFilterSelectOption } from "@/interfaces/objectList/IFilterSelectOption";

export const objectCategories: IFilterSelectOption[] = [
    {
        name: "Вторичная недвижимость",
        value: "resale",
        filter: {
            category: "квартира",
        },
    },
    {
        name: "Новостройки",
        value: "new_building",
        filter: {
            "building-name__isnull": false,
        },
    },
    {
        name: "Дома",
        value: "house",
        filter: {
            category: "дом",
        },
    },
    {
        name: "Участки",
        value: "lot",
        filter: {
            category: "участок",
        },
    },
    {
        name: "Комнаты",
        value: "room",
        filter: {
            category: "комната",
        },
    },
    {
        name: "Коммерческая",
        value: "commercial",
        filter: {
            category: "коммерческая",
        },
    },
];
