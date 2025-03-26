interface CreateFaqI {
    main_heading: string;
    title: string;
    title_description: string;
    order: string;
    is_active: string;
}

interface GetFaqI {
    id: string;
    main_heading: string;
    title: string;
    title_description: string;
    category: string;
    order: string;
    is_active: string;
}

interface FaqResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: GetFaqI[];
}