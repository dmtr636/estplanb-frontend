// eslint-disable-next-line no-undef
export const fetcher = (url: string, init?: RequestInit) =>
    fetch(url, init).then((res) => res.json());
