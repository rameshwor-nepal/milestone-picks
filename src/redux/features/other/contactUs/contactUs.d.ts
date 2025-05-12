interface CreateContactI {
    full_name: string;
    email: string;
    message: string;
    phone: string;
    country: string;
}

interface GetContactInfoI {
    count: number;
    previous: string;
    next: string;
    results: {
        id: string
        full_name: string;
        email: string;
        message: string;
        phone: string;
        country: string;
    }[]
}

interface GetCountryResponseI {
    [key: string]: string;
}