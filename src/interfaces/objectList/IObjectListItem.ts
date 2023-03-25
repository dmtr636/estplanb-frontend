export interface IObjectListItem {
    internal_id: number;
    data: {
        area?: {
            unit: string;
            value: number;
        };
        type: string;
        floor: number;
        "floors-total": number;
        image?: string[] | string;
        price: {
            value: number;
            period: string;
            currency: string;
        };
        rooms: number;
        haggle: number;
        category: string;
        location: {
            region: string;
            address?: string;
            country: string;
            latitude: number;
            longitude: number;
            "locality-name": string;
        };
        description: string;
    };
}
