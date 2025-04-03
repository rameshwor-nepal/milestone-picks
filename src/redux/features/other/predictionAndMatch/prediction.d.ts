interface MatchesI {
    id: string;
    sports: string;
    team_1: string;
    team_2: string;
    location: string;
    match_date: string;
}

interface MatchesResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: MatchesI[];
}
