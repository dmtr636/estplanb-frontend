import { makeAutoObservable } from "mobx";
import { objectCategories } from "@/constants/objectMarket/objectCategories";
import { dealTypes } from "@/constants/objectMarket/dealTypes";
import { IFilterSelectOption } from "@/interfaces/objectList/IFilterSelectOption";

class ObjectListStore {
    constructor() {
        makeAutoObservable(this);
    }

    category: IFilterSelectOption = objectCategories[0];
    dealType: IFilterSelectOption = dealTypes[0];

    setCategory(category: IFilterSelectOption) {
        this.category = category;
    }

    setDealType(type: IFilterSelectOption) {
        this.dealType = type;
    }

    get preparedFilter() {
        return {
            ...this.category.filter,
            ...this.dealType.filter,
        };
    }
}

export const objectListStore = new ObjectListStore();
