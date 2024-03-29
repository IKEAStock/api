import fetch from "node-fetch"
export default async function fetchMngr(url: string) {
    /**
     * The fetch manager for fetching from the IKEA API
     * @param url - the url to fetch from
     */
    const res = await fetch(url, { method: "GET", headers: {
        "x-client-id": "da465052-7912-43b2-82fa-9dc39cdccef8"
    }})
    return res
}