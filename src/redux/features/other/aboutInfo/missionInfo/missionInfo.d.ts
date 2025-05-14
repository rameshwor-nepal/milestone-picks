interface MissionI {
    id: number;
    title: string;
    description: string;
    image: string;
    order: number;
}

interface GetMissionI {
    count: number;
    next: string;
    previous: string;
    results: MissionI[]
}