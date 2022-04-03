export function batchGETRequests(...urls: string[]) {
    const requests = urls.map((url) => fetch(url));
    return Promise.all(requests).then((responses) => Promise.all(responses.map((res) => res.json())));
}
