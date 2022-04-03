import { useEffect, useState } from 'react';

export function useResourceRequest<Resource>(
    request: Promise<Resource> = Promise.reject()
): [Resource | undefined, string | undefined, boolean] {
    const [resource, setResource] = useState<Resource>();
    const [fetching, setFetching] = useState<boolean>(true);
    const [error, setError] = useState<string>();

    useEffect(() => {
        request
            .finally(() => setFetching(false))
            .then((resource) => resource && setResource(resource))
            .catch(() => setError("Request error!"));
    }, []);

    return [resource, error, fetching];
}
