import { useEffect } from "react";

export const useDocumentClick = (callback: () => void) => {
    const handleClick = () => {
        callback();
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);
};
