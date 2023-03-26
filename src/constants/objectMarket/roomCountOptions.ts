import { IFilterSelectOption } from "@/interfaces/objectList/IFilterSelectOption";

export const roomCountOptions: IFilterSelectOption[] = [
    {
        name: "Студия",
        value: "studio",
        filter: {
            studio: 1,
        },
    },
    {
        name: "1 комната",
        value: "1room",
        filter: {
            rooms: 1,
        },
    },
    {
        name: "2 комнаты",
        value: "2room",
        filter: {
            rooms: 2,
        },
    },
    {
        name: "3 комнаты",
        value: "3room",
        filter: {
            rooms: 3,
        },
    },
    {
        name: "4 комнаты",
        value: "4room",
        filter: {
            rooms: 4,
        },
    },
    {
        name: "5+ комнат",
        value: "5room",
        filter: {
            rooms__gte: 5,
        },
    },
    {
        name: "Свободная планировка",
        value: "free",
        filter: {
            studio: 1,
        },
    },
];
