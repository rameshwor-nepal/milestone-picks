interface TestimonialI {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
    star_rating: string;
}

interface TestimonialResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: TestimonialI[];
}