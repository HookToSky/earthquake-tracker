import { useState, useEffect } from 'react';
import { getEarthquakes } from '../../services/earthquakeService';

export function useEarthquakesFetcher(): any {
    const [earthquakes, setEarthquakes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchEarthquakes = async () => {
        try {
            const data = await getEarthquakes();
            setEarthquakes(data);
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    };
    useEffect(() => {
        setLoading(true);
        setError(false);
        fetchEarthquakes();
    }, []);

    return { earthquakes, loading, error };
}
