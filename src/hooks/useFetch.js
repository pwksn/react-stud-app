import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();

        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted!');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });

            return () => abortCtrl.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;