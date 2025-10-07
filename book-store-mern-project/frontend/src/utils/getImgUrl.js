function getImgUrl(name) {
    if (!name) return "";
    // If it's an absolute URL or a data/blob URL, return as-is
    const lower = String(name).toLowerCase();
    if (lower.startsWith("http://") || lower.startsWith("https://") || lower.startsWith("data:") || lower.startsWith("blob:")) {
        return name;
    }
    // Otherwise resolve from local assets folder
    return new URL(`../assets/books/${name}`, import.meta.url).toString();
}

export { getImgUrl };