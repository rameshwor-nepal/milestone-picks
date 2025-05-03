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