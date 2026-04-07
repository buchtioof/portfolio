import { useState, useEffect } from 'react';

export const useLetterboxd = () => {
    const [lastMovie, setLastMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/api/letterboxd');
                
                if (response.ok) {
                    const data = await response.json();
                    setLastMovie(data);
                } else {
                    console.error("Erreur lors de la récupération des données Letterboxd");
                }
            } catch (error) {
                console.error("Erreur Letterboxd:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { lastMovie, loading };
};