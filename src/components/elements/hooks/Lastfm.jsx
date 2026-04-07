import { useState, useEffect } from 'react';

export const useLastFM = () => {
    const [topArtist, setTopArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/lastfm');
                
                if (response.ok) {
                    const data = await response.json();
                    setTopArtist(data);
                } else {
                    console.error("Erreur lors de la récupération des données LastFM");
                }
            } catch (error) {
                console.error("Erreur critique Last.fm:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { topArtist, loading };
};