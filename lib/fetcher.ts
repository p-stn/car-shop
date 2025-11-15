const fetcher = async (...args) => {
    const res = await fetch(...args);

    if (!res.ok) {
        const error = new Error("Request failed");
        error.status = res.status;
        error.info = await res.json().catch(() => null);
        throw error;
    }
    return res.json();
};
export default fetcher