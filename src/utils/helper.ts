


export function generateSlug(str: string) {
    return str.split(" ").map((s) => s.toLowerCase()).join("-")
}

