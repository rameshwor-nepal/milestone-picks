interface HeroSectionResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: HeroSectionDataI[];
}

interface HeroSectionDataI {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}