interface GetStatsResponseI {
    count: number;
    next: string;
    previous: string;
    results: {
        id: number;
        section: string;
        description: string;
        icon: string;
        order: number;
        number: number;
    }[]
}

interface CreateStatI {
    section: string;
    icon: string;
    number: string;
    description: string;
    order: string;
}