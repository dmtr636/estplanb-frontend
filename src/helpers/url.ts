import { DOMAIN } from "@/constants/config";

export const url = (path: string) => `${DOMAIN}/${path}`;
export const apiUrl = (path: string) => `${DOMAIN}/api/${path}`;
