import React from 'react';

// Import des composants Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import des styles Swiper obligatoires
import 'swiper/css';
import 'swiper/css/navigation';

import '/src/assets/css/elements/carousel.css';

const projects = [
    {
        id: 1,
        title: "grabber",
        description: "Interface admin pour parcs informatique",
        image: "https://github.com/buchtioof/grabber/blob/main/assets/logo.png?raw=true",
        link: "https://github.com/buchtioof/grabber",
        tags: [ { name: "Linux", color: "#264de4" }, { name: "Shell", color: "#4b443a" }, { name: "Github", color: "#5e6067" } ]
    },
    {
        id: 2,
        title: "Charte graphique personnelle",
        image: "/img/assets/projects/charte.png",
        tags: [ { name: "Figma", color: "#ff9b9b" }, { name: "Illustrator", color: "#fbb034" } ]
    },
    {
        id: 3,
        title: "Porfolio",
        image: "/img/assets/projects/portfolio.png",
        link: "https://github.com/buchtioof/portfolio",
        tags: [ { name: "React", color: "#78c3d8" }, { name: "Vite", color: "#ae8adf" }, { name: "Javascript", color: "#d5ab49" }, { name: "Github", color: "#5e6067" } ]
    },
    {
        id: 4,
        title: "Projet Universitaire de site PhP",
        image: "",
        link: "https://github.com/buchtioof/php-json",
        tags: [ { name: "PhP", color: "#787ad8" }, { name: "SQL", color: "#bdaad8" }, { name: "Javascript", color: "#d5ab49" }, { name: "JSON", color: "#5e6763" } ]
    },
    {
        id: 5,
        title: "dribbble shots",
        image: "/img/assets/projects/dribbble.png",
        link: "https://dribbble.com/ramziii__",
        tags: [ { name: "Figma", color: "#ff9b9b" }, { name: "Illustrator", color: "#fbb034" }, { name: "Photoshop", color: "#345cfb" } ]
    },
];

const CarouselProjects = () => {
    return (
        <div className="carousel-wrapper">
            <Swiper
                // Modules swiper
                modules={[Navigation]}
                
                // Espacement entre les slides
                spaceBetween={30}
                
                // Configuration Responsive
                breakpoints={{
                    640: { slidesPerView: 1 }, // Mobile
                    768: { slidesPerView: 2 }, // Tablette
                    1024: { slidesPerView: 3 }, // Desktop
                }}
                
                // Connexion aux boutons personnalisés (via les classes CSS)
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                
                className="mySwiper"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <a  
                            href={project.link} 
                            className="card" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="card-image-placeholder">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="card-image"
                                />
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="tags-container">
                                {project.tags.map((tag, i) => (
                                    <span 
                                        key={i} 
                                        className="tag-pill" 
                                        style={{ backgroundColor: tag.color }}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="carousel-controls">
                <button className="carousel-btn custom-prev">&lt; Retour</button>
                <button className="carousel-btn custom-next">Suivant &gt;</button>
            </div>
        </div>
    );
};

export default CarouselProjects;