interface BettingConceptI {
    id: number;
    title: string;
    description: string;
    example: string;
    concept_type: string;
    icon: string;
    order: number;
    is_active: boolean;
}

interface BettingConceptResponseI {
    count: number;
    next: string;
    previous: string;
    results: BettingContentI[]
}

interface CreateBettingConceptI {
    title: string;
    description: string;
    example: string;
    concept_type: string;
    icon: string;
    order: string;
    is_active: boolean;
}