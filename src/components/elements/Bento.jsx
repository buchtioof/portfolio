import '/src/assets/css/elements/bento.css';
import { useState, useEffect } from 'react';
import { useLetterboxd } from '/src/components/elements/hooks/Letterboxd';
import { useLastFM } from '/src/components/elements/hooks/Lastfm';
import {
    GithubLogo,
    LinkedinLogo,
    DribbbleLogo,
    MapPin,
    Atom,
    FigmaLogo,
    LinuxLogo,
    TerminalWindow,
    Cube,
    Database, 
    FilmStrip,
    MusicNoteIcon
} from '@phosphor-icons/react';

// --- SOUS-COMPOSANTS ---

const SocialSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[currentIndex];

    return (
        <a href={currentSlide.link}
            target="_blank"
            rel="noreferrer"
            className="bento-inner social-slider"
            style={{ '--hover-color': currentSlide.color }}>
            <div className="slide-content" key={currentIndex}>
                <div className="social-icon">
                    {currentSlide.icon}
                </div>
                <span>{currentSlide.label}</span>
            </div>

            <div className="slider-dots">
                {slides.map((_, idx) => (
                    <span key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}>
                    </span>
                ))}
            </div>
        </a>
    );
};

const BioTile = ({ title, content, image }) => (
    <div className="bento-inner bio">
        <div className="bio-text">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        <div className="bio-image">
            <img src={image} alt="Profile" />
        </div>
    </div>
);

const MapTile = ({ content }) => (
    <div className="bento-inner map">
        <div className="map-bg"></div>
        <div className="map-pin">
            <MapPin size={32} weight="fill" color="#ff5555" />
            <span>{content}</span>
        </div>
    </div>
);

const StackTile = ({ title, icons }) => (
    <div className="bento-inner stack">
        <h3>{title}</h3>
        <div className="stack-grid">
            {icons.map((tech, i) => (
                <div key={i} className="tech-item">
                    {tech.icon}
                    <span>{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const ArtistTile = () => {
    const { topArtist, loading: artistLoading } = useLastFM();

    if (artistLoading) {
        return (
            <div className="bento-inner artist loading">
                <div className="music-content centered">
                    <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>Chargement...</span>
                </div>
            </div>
        );
    }

    if (!topArtist) return null;

    return (
        <a 
            href={topArtist.link} 
            target="_blank" 
            rel="noreferrer"
            className="bento-inner artist" 
            style={{
                backgroundImage: topArtist.image ? `url(${topArtist.image})` : 'linear-gradient(to bottom right, #333, #111)',
                textDecoration: 'none'
            }}
            aria-label={"Écouter " + topArtist.name + " sur Last.fm"}
        >
            <div className="music-overlay"></div>
            
            <div className="music-content">
                <div className="music-icon">
                    <MusicNoteIcon size={24} weight="fill" color="#FFF" />
                </div>
                
                <div className="music-info">
                    <span>Artist of the week</span>
                    <h4>{topArtist.name}</h4>
                    
                    <span className="play-count">
                        {topArtist.playcount} écoutes
                    </span>
                </div>
            </div>
        </a>
    );
};

const MovieTile = () => {
    const { lastMovie, loading } = useLetterboxd('selectokebab'); 

    if (loading) return (
        <div className="bento-inner movie loading">
             <div className="movie-content centered">
                <span>Loading...</span>
             </div>
        </div>
    );

    if (!lastMovie) return (
        <div className="bento-inner movie error">
            <div className="movie-content">
                <span>Film introuvable</span>
            </div>
        </div>
    );

    return (
        <a 
            href={lastMovie.link}
            target="_blank" 
            rel="noreferrer"
            className="bento-inner movie" 
            style={{
                backgroundImage: `url(${lastMovie.image})`,
                textDecoration: 'none'
            }}
            aria-label={"Voir le film " + lastMovie.title + " sur Letterboxd"}
        >
            <div className="movie-overlay"></div>
            <div className="movie-content">
                <div className="movie-icon">
                    <FilmStrip size={24} weight="fill" />
                </div>
                <div className="movie-info">
                    <span>Last Watch</span>
                    <h4>{lastMovie.title}</h4>
                    <span className="movie-rating">{lastMovie.rating}</span>
                </div>
            </div>
        </a>
    );
};

// --- DICTIONNAIRE DE COMPOSANTS ---

const TileComponentsMap = {
    'bio': BioTile,
    'map': MapTile,
    'social-slider': SocialSlider,
    'stack': StackTile,
    'top-artist': ArtistTile,
    'movie': MovieTile
};

// --- DONNEES STATIQUES ---

const tiles = [
    {
        id: 1,
        type: 'bio',
        title: "Qui suis-je ?",
        content: "Bienvenue chez moi ! L'idée de ce site, c'est de me présenter, mon parcours et mes compétences tout en ajoutant ma petite touche personnelle, c'est en tout cas l'envie derrière ce projet. Moi c'est Ramzi Idir, je suis étudiant en Devops et j'ai pour objectif à terme de devenir Développeur full-stack et Administrateur systèmes. En dehors de ça, j'ai un amour énorme pour l'UI bien fait ainsi que pour l'expérience utilisateur réfléchie. Mis à part le numérique, je suis un grand fan de musique et de cinéma, passions que j'alimente en diggant de nouveaux albums ou en allant régulièrement au cinéma. Merci à vous de passer me voir dans mon espace personnel et à très vite je l'espère !",
        image: "/img/assets/pp.jpg",
        size: 'large'
    },
    {
        id: 2,
        type: 'map',
        title: "Localisation",
        content: "Paris, France",
        size: 'square'
    },
    {
        id: 3,
        type: 'social-slider',
        size: 'square',
        slides: [
            {
                icon: <GithubLogo size={32} weight="fill"/>,
                label: "/buchtioof",
                link: "https://github.com/buchtioof",
                color: "#333"
            }, {
                icon: <LinkedinLogo size={32} weight="fill"/>,
                label: "/ramziidir",
                link: "https://linkedin.com/in/ramziidir",
                color: "#0077b5"
            }, {
                icon: <DribbbleLogo size={32} weight="fill"/>,
                label: "/ramziii__",
                link: "https://dribbble.com/ramziii__",
                color: "#ff74d5"
            }
        ]
    },
    {
        id: 4,
        type: 'stack',
        title: "Ma Stack Technique",
        icons: [
            { icon: <Atom size={24} weight="duotone"/>, name: "React" },
            { icon: <TerminalWindow size={24} weight="duotone"/>, name: "Node/JS" },
            { icon: <Database size={24} weight="duotone"/>, name: "PhP/SQL" },
            { icon: <FigmaLogo size={24} weight="duotone"/>, name: "Figma" },
            { icon: <LinuxLogo size={24} weight="duotone"/>, name: "Linux/Bash" },
            { icon: <Cube size={24} weight="duotone"/>, name: "Docker" },
        ],
        size: 'wide'
    }, 
    {
        id: 5,
        type: 'top-artist',
        size: 'wide'
    }, 
    {
        id: 6,
        type: 'movie',
        size: 'wide'
    },
];

// --- COMPOSANT PRINCIPAL ---

export default function BentoAbout() {
    return (
        <div className="bento-about-container">
            {tiles.map((tile) => {
                const SpecificTileComponent = TileComponentsMap[tile.type];
                
                if (!SpecificTileComponent) return null;

                return (
                    <div key={tile.id} className={`bento-tile ${tile.size} ${tile.type}`}>
                        <SpecificTileComponent {...tile} />
                    </div>
                );
            })}
        </div>
    );
}