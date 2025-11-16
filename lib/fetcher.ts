const fetcher = async (url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error("Request failed");
    }
    return res.json();
};

export default fetcher;
