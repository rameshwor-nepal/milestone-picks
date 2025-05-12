interface MatchesI {
    id: string;
    sport: {
        id: string;
        name: string;
        icon: string;
    };
    team_1: string;
    team_2: string;
    location: string | null;
    match_date: string;
}

interface CreateMatchI {
    sport_id: string;
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
    match: string;
    match_detail: MatchesI;
    prediction_type: string;
    predicted_outcome: string;
    our_prediction: string;
    placed_at: string;
    result: string;
    confidence_level: number | null;
}

interface PredictionResponseI {
    count: number;
    next: number | null;
    previous: number | null;
    results: PredictionI[];
}

interface CreatePredictionI {
    user: string;
    match: string;
    prediction_type: string;
    predicted_outcome: string;
    result: string;
    our_prediction: string;
    confidence_level: string;
}