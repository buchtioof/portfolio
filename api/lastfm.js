export default async function handler(req, res) {
    const apiKey = process.env.VITE_LASTFM_API_KEY;
    const username = process.env.VITE_LASTFM_USERNAME;

    if (!apiKey || !username) {
        return res.status(500).json({ error: "Variables d'environnement manquantes." });
    }

    try {
        const lastFmResponse = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&period=7day&limit=1&format=json`
        );
        const lastFmData = await lastFmResponse.json();

        if (!lastFmData.topartists || lastFmData.topartists.artist.length === 0) {
            return res.status(404).json({ error: "Aucun artiste trouvé." });
        }

        const artist = lastFmData.topartists.artist[0];
        let imageFound = null;

        try {
            const artistNameEncoded = encodeURIComponent(artist.name);
            const deezerUrl = `https://api.deezer.com/search/artist?q=${artistNameEncoded}`;
            
            const imgResponse = await fetch(deezerUrl);
            const imgData = await imgResponse.json();

            if (imgData.data && imgData.data.length > 0) {
                imageFound = imgData.data[0].picture_xl || imgData.data[0].picture_big;
            }
        } catch (deezerError) {
            console.warn("Impossible de récupérer l'image Deezer.", deezerError);
        }

        return res.status(200).json({
            name: artist.name,
            playcount: artist.playcount,
            link: artist.url,
            image: imageFound
        });

    } catch (error) {
        console.error("Erreur serveur LastFM:", error);
        return res.status(500).json({ error: "Erreur interne du serveur." });
    }
}