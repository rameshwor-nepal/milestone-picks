interface SportCategoryI {
    id: string;
    title: string;
    name: string;
    icon: string;
}

interface SportCategoryResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: SportCategoryI[];
}