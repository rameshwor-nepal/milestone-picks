export function formatDate(dateStr: string | number | Date | null) {
    if (!dateStr) return "";

    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateStr));
}