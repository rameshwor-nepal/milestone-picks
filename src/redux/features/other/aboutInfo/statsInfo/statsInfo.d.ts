interface StatI {
    id: number;
    section: string;
    description: string;
    icon: string;
    order: number;
    number: number;
}

interface GetStatsResponseI {
    count: number;
    next: string;
    previous: string;
    results: StatI[]
}

interface CreateStatI {
    section: string;
    icon: string;
    number: string;
    description: string;
    order: string;
}