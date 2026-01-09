import '/src/assets/css/elements/bento.css';
import React, {useState, useEffect} from 'react';
import {
    GithubLogo,
    LinkedinLogo,
    DribbbleLogo,
    MusicNotes,
    MapPin,
    Atom,
    FigmaLogo,
    LinuxLogo,
    TerminalWindow,
    Cube,
    Database, 
    FilmStrip
} from '@phosphor-icons/react';

// --- SOUS-COMPOSANT POUR LE SLIDER SOCIAL ---
const SocialSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change toutes les 3 secondes

        return() => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[currentIndex];

    return (
        <a href={
                currentSlide.link
            }
            target="_blank"
            rel="noreferrer"
            className="bento-inner social-slider"
            style={
                {'--hover-color': currentSlide.color}
        }>
            {/* La clé (key) force React à relancer l'animation CSS à chaque changement */}
            <div className="slide-content"
                key={currentIndex}>
                <div className="social-icon">
                    {
                    currentSlide.icon
                }</div>
                <span>{
                    currentSlide.label
                }</span>
            </div>

            {/* Indicateurs de points en bas (optionnel, pour le style) */}
            <div className="slider-dots">
                {
                slides.map((_, idx) => (
                    <span key={idx}
                        className={
                            `dot ${
                                idx === currentIndex ? 'active' : ''
                            }`
                    }></span>
                ))
            } </div>
        </a>
    );
};

export default function BentoAbout() {
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
                    icon: <GithubLogo size={32}
                        weight="fill"/>,
                    label: "/buchtioof",
                    link: "https://github.com/buchtioof",
                    color: "#333"
                }, {
                    icon: <LinkedinLogo size={32}
                        weight="fill"/>,
                    label: "/ramziidir",
                    link: "https://linkedin.com/in/ramziidir",
                    color: "#0077b5"
                }, {
                    icon: <DribbbleLogo size={32}
                        weight="fill"/>,
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
            // Phosphor n'a pas tous les logos (ex: Node/Docker),
            // on utilise donc des métaphores visuelles ou les logos dispos.
            icons: [
                {
                    icon: <Atom size={24}
                        weight="duotone"/>,
                    name: "React"
                },
                {
                    icon: <TerminalWindow size={24}
                        weight="duotone"/>,
                    name: "Node/JS"
                },
                {
                    icon: <Database size={24}
                        weight="duotone"/>,
                    name: "PhP/SQL"
                },
                {
                    icon: <FigmaLogo size={24}
                        weight="duotone"/>,
                    name: "Figma"
                }, {
                    icon: <LinuxLogo size={24}
                        weight="duotone"/>,
                    name: "Linux/Bash"
                }, {
                    icon: <Cube size={24}
                        weight="duotone"/>,
                    name: "Docker"
                },
            ],
            size: 'wide'
        }, {
            id: 5,
            type: 'music',
            title: "En boucle",
            content: "Daft Punk - Veridis Quo",
            size: 'wide'
        }, {
            id: 7,
            type: 'movie',
            title: "Dernier film vu",
            content: "Interstellar", // Titre du film
            image: "https://media.themoviedb.org/t/p/w1066_and_h600_face/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg", // URL de l'affiche (exemple Interstellar)
            size: 'wide' // Format carré idéal pour une affiche rognée
        },
    ];

    const renderContent = (tile) => {
        switch (tile.type) {
            case 'bio':
                return (
                    <div className="bento-inner bio">
                        <div className="bio-text">
                            <h3>{
                                tile.title
                            }</h3>
                            <p>{
                                tile.content
                            }</p>
                        </div>
                        <div className="bio-image">
                            <img src={
                                    tile.image
                                }
                                alt="Profile"/>
                        </div>
                    </div>
                );
            case 'map':
                return (
                    <div className="bento-inner map">
                        <div className="map-bg"></div>
                        <div className="map-pin">
                            {/* Icone Phosphor MapPin */}
                            <MapPin size={32}
                                weight="fill"
                                color="#ff5555"/>
                            <span>{
                                tile.content
                            }</span>
                        </div>
                    </div>
                );
            case 'social-slider':
                return <SocialSlider slides={
                    tile.slides
                }/>;
            case 'stack':
                return (
                    <div className="bento-inner stack">
                        <h3>{
                            tile.title
                        }</h3>
                        <div className="stack-grid">
                            {
                            tile.icons.map((tech, i) => (
                                <div key={i}
                                    className="tech-item">
                                    {
                                    tech.icon
                                }
                                    <span>{
                                        tech.name
                                    }</span>
                                </div>
                            ))
                        } </div>
                    </div>
                );
            case 'music':
                return (
                    <div className="bento-inner music">
                        <div className="music-icon">
                            <MusicNotes size={40}
                                weight="fill"/>
                        </div>
                        <div className="music-info">
                            <span>Lecture en cours...</span>
                            <div className="scrolling-text">
                                {
                                tile.content
                            }</div>
                        </div>
                        <div className="equalizer">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                );
            case 'movie':
              return (
                  /* On met l'image en background directement */
                  <div className="bento-inner movie" style={{backgroundImage: `url(${tile.image})`}}>
                      <div className="movie-overlay"></div>
                      <div className="movie-content">
                          <div className="movie-icon">
                              <FilmStrip size={24} weight="fill" />
                          </div>
                          <div className="movie-info">
                              <span>Last Watch</span>
                              <h4>{tile.content}</h4>
                          </div>
                      </div>
                  </div>
              );
            default:
                return null;
        }
    };

    return (
        <div className="bento-about-container">
            {
            tiles.map((tile) => (
                <div key={
                        tile.id
                    }
                    className={
                        `bento-tile ${
                            tile.size
                        } ${
                            tile.type
                        }`
                }>
                    {
                    renderContent(tile)
                } </div>
            ))
        } </div>
    );
}
