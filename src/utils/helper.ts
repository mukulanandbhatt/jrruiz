


export function generateSlug(str: string) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric chars
        .replace(/\s+/g, "-")         // replace spaces with -
        .replace(/-+/g, "-");         // collapse multiple -
}
