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
    roomNumbers: IFilterSelectOption[] = [];

    setCategory(category: IFilterSelectOption) {
        this.category = category;
    }

    setDealType(type: IFilterSelectOption) {
        this.dealType = type;
    }

    setRoomNumbers(roomNumbers: IFilterSelectOption[]) {
        this.roomNumbers = roomNumbers;
    }

    get preparedFilter() {
        return {
            ...this.category.filter,
            ...this.dealType.filter,
        };
    }

    get preparedRoomFilter() {
        return this.roomNumbers.map((roomNumber) => roomNumber.filter);
    }
}

export const objectListStore = new ObjectListStore();
