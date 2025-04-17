interface SearchFieldI {
    search: string | null;
    page: number | null;
    page_size: number | null;
}

interface DropDownI {
    value: string | number;
    label: string;
}