import useSWR from "swr";
import { fetcher } from "@/helpers/fetcher";
import { apiUrl } from "@/helpers/url";
import { ISlide } from "@/interfaces/ISlide";

interface IResponse {
    result: ISlide[];
}

export const useSlides = () => {
    const { data, error, isLoading } = useSWR<IResponse>(
        apiUrl("slides"),
        fetcher,
    );

    return {
        slides: data?.result,
        isLoading,
        isError: error,
    };
};
