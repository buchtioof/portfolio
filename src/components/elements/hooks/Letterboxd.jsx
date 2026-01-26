import { useState, useEffect } from 'react';

export const useLetterboxd = (username) => {
    const [lastMovie, setLastMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://letterboxd.com/${username}/rss/`
                );
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const movie = data.items[0];

                    // Extraction de l'image (affiche)
                    const imgRegex = /src="([^"]+)"/;
                    const match = movie.description.match(imgRegex);
                    const posterUrl = match ? match[1] : null;

                    const parts = movie.title.split(' - ');
                    const cleanTitle = parts[0];
                    const ratingStr = parts[1] || "Watched";

                    setLastMovie({
                        title: cleanTitle,
                        image: posterUrl,
                        link: movie.link,
                        rating: ratingStr,
                        date: movie.pubDate
                    });
                }
            } catch (error) {
                console.error("Erreur Letterboxd:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [username]);

    return { lastMovie, loading };
};