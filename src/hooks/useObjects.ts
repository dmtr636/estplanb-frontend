import { objectListStore } from "@/stores/objectListStore";
import { apiUrl } from "@/helpers/url";
import useSWR from "swr";
import { fetcher } from "@/helpers/fetcher";
import { IObjectListItem } from "@/interfaces/objectList/IObjectListItem";

interface IResponse {
    result: IObjectListItem[];
}

export const useObjects = () => {
    const store = objectListStore;

    const url = new URL(apiUrl("objects-list"));
    const params = {
        limit: "50",
        offset: "0",
        filter: JSON.stringify(store.preparedFilter),
    };
    url.search = new URLSearchParams(params).toString();

    const { data, error, isLoading } = useSWR<IResponse>(
        url.toString(),
        fetcher,
    );

    return {
        objects: data?.result,
        isLoading,
        isError: error,
    };
};
