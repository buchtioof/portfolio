import { useState, useEffect } from 'react';

export const useLastFM = () => {
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
    const username = import.meta.env.VITE_LASTFM_USERNAME;

    const [topArtist, setTopArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username || !apiKey) return;

        const fetchData = async () => {
            try {
                const lastFmResponse = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&period=7day&limit=1&format=json`
                );
                const lastFmData = await lastFmResponse.json();

                if (lastFmData.topartists && lastFmData.topartists.artist.length > 0) {
                    const artist = lastFmData.topartists.artist[0];
                    
                    setTopArtist({
                        name: artist.name,
                        playcount: artist.playcount,
                        link: artist.url,
                        image: null 
                    });

                    try {
                        const artistNameEncoded = encodeURIComponent(artist.name);
                        const deezerUrl = `https://corsproxy.io/?https://api.deezer.com/search/artist?q=${artistNameEncoded}`;
                        
                        const imgResponse = await fetch(deezerUrl);
                        const imgData = await imgResponse.json();

                        if (imgData.data && imgData.data.length > 0) {
                            const imageFound = imgData.data[0].picture_xl || imgData.data[0].picture_big;
                            
                            setTopArtist(prevState => ({
                                ...prevState,
                                image: imageFound
                            }));
                        }
                    } catch (imageError) {
                        console.warn("Impossible de récupérer l'image Deezer (CORS ou API HS), affichage fallback.", imageError);
                    }
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