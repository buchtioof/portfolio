import Parser from 'rss-parser';

export default async function handler(req, res) {
    const username = "selectokebab";

    if (!username) {
        return res.status(500).json({ error: "Nom d'utilisateur Letterboxd manquant." });
    }

    const parser = new Parser();

    try {
        // Le serveur va lire le XML de Letterboxd directement
        const feed = await parser.parseURL(`https://letterboxd.com/${username}/rss/`);

        if (!feed.items || feed.items.length === 0) {
            return res.status(404).json({ error: "Aucun film trouvé." });
        }

        const movie = feed.items[0];

        // Extraction de l'image depuis le HTML contenu dans le flux RSS
        const imgRegex = /src="([^"]+)"/;
        const match = movie.content.match(imgRegex);
        const posterUrl = match ? match[1] : null;

        // Nettoyage du titre
        const parts = movie.title.split(' - ');
        const cleanTitle = parts[0];
        const ratingStr = parts[1] || "Watched";

        // Envoi des données formatées
        return res.status(200).json({
            title: cleanTitle,
            image: posterUrl,
            link: movie.link,
            rating: ratingStr,
            date: movie.pubDate
        });

    } catch (error) {
        console.error("Erreur serveur Letterboxd:", error);
        return res.status(500).json({ error: "Erreur interne du serveur." });
    }
}