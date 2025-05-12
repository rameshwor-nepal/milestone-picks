interface CreateFaqI {
    main_heading: string;
    title: string;
    title_description: string;
    order: string | null;
    is_active: boolean;
    category: string | null;
}

interface GetFaqI {
    id: string;
    main_heading: string;
    title: string;
    title_description: string;
    category: string;
    order: string;
    is_active: boolean;
}

interface FaqResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: GetFaqI[];
}