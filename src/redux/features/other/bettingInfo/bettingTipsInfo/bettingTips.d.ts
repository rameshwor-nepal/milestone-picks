interface GetBettingTipsResponseI {
    count: number;
    next: string;
    previous: string;
    results: {
        id: number;
        title: string;
        content: string;
        image: string;
        slug: string;
        order: number;
        is_active: boolean;
    }[]
}