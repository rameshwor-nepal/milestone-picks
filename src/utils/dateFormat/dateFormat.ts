export function formatDate(dateStr: string | number | Date | null) {
    if (!dateStr) return "";

    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateStr));
}

export function formatDateTime(dateStr: string | number | Date | null) {
    if (!dateStr) return "";

    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(new Date(dateStr));
}