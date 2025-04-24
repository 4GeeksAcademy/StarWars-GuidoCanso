import { useState, useEffect } from 'react';

const useEntityDetails = (url) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Error fetching details');
                const data = await res.json();
                setDetails(data.result.properties);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [url]);

    return { details, loading, error };
};

export default useEntityDetails;
