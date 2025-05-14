interface FeatureI {
    id: number;
    title: string;
    description: string;
    icon: string;
    order: number;
}

interface GetFeatureResponseI {
    count: number;
    next: string;
    previous: string;
    results: FeatureI[]
}

interface CreateFeatureI {
    title: string;
    description: string;
    icon: string;
    order: string;
}