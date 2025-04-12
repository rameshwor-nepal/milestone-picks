interface MatchesI {
    id: string;
    sport: string;
    team_1: string;
    team_2: string;
    location: string | null;
    match_date: string;
}

interface MatchesResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: MatchesI[];
}

interface SportI {
    id: string;
    name: string;
    icon: string;
}

interface SportsResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: SportI[];
}

interface PredictionI {
    id: number;
    user: number;
    match: number;
    prediction_type: string;
    predicted_outcome: string;
    placed_at: string;
    result: string | null;
}

interface PredictionResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: PredictionI[];
}