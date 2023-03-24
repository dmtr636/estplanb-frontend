import { makeAutoObservable } from "mobx";
import { ISelectOption } from "@/components/ui/Select/Select";
import { objectCategories } from "@/constants/objectMarket/objectCategories";
import { dealTypes } from "@/constants/objectMarket/dealTypes";

class ObjectMarketStore {
    constructor() {
        makeAutoObservable(this);
    }

    category: ISelectOption = objectCategories[0];
    dealType: ISelectOption = dealTypes[0];

    setCategory(category: ISelectOption) {
        this.category = category;
    }

    setDealType(type: ISelectOption) {
        this.dealType = type;
    }
}

export const objectMarketStore = new ObjectMarketStore();
