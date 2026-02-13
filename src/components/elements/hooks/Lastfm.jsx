import { useState, useEffect } from 'react';

export const useLastFM = (username, apiKey) => {
    const [topArtist, setTopArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username || !apiKey) return;

        const fetchData = async () => {
            try {
                // 1. Appel Last.fm (Prioritaire)
                const lastFmResponse = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&period=7day&limit=1&format=json`
                );
                const lastFmData = await lastFmResponse.json();

                if (lastFmData.topartists && lastFmData.topartists.artist.length > 0) {
                    const artist = lastFmData.topartists.artist[0];
                    
                    // On définit l'artiste TOUT DE SUITE avec une image nulle par défaut.
                    // Comme ça, même si Deezer échoue, on a le texte.
                    setTopArtist({
                        name: artist.name,
                        playcount: artist.playcount,
                        link: artist.url,
                        image: null 
                    });

                    // 2. Tentative récupération Image via Deezer + Nouveau Proxy
                    try {
                        const artistNameEncoded = encodeURIComponent(artist.name);
                        // On utilise 'corsproxy.io' qui est souvent plus rapide et stable que 'allorigins'
                        const deezerUrl = `https://corsproxy.io/?https://api.deezer.com/search/artist?q=${artistNameEncoded}`;
                        
                        const imgResponse = await fetch(deezerUrl);
                        const imgData = await imgResponse.json();

                        // Si Deezer trouve un résultat
                        if (imgData.data && imgData.data.length > 0) {
                            const imageFound = imgData.data[0].picture_xl || imgData.data[0].picture_big;
                            
                            // On met à jour l'état existant juste avec l'image
                            setTopArtist(prevState => ({
                                ...prevState,
                                image: imageFound
                            }));
                        }
                    } catch (imageError) {
                        console.warn("Impossible de récupérer l'image Deezer (CORS ou API HS), affichage fallback.", imageError);
                        // On ne fait RIEN ici, l'artiste reste affiché avec le fond par défaut.
                    }
                }
            } catch (error) {
                console.error("Erreur critique Last.fm:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username, apiKey]);

    return { topArtist, loading };
};