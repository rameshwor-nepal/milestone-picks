interface GetFeatureResponseI {
    count: number;
    next: string;
    previous: string;
    results: {
        id: number;
        title: string;
        description: string;
        icon: string;
        order: number;
    }[]
}

interface CreateFeatureI {
    title: string;
    description: string;
    icon: string;
    order: string;
}