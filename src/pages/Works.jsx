import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import '../assets/css/work.css';

// --- Composants pour les flèches de navigation ---

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <div className={`arrow-btn left ${isFirstItemVisible ? 'disabled' : ''}`} onClick={() => scrollPrev()}>
      <CaretLeft size={32} />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <div className={`arrow-btn right ${isLastItemVisible ? 'disabled' : ''}`} onClick={() => scrollNext()}>
      <CaretRight size={32} />
    </div>
  );
}

// --- Composant principal ---

export default function Works() {
    
    // Tes données de projets
    const projects = [
        {
            id: 1,
            title: "grabber",
            description: "Fetch toutes les informations d'un PC sous linux",
            image: "/img/assets/",
            tags: [
                { name: "Shell", color: "#61DAFB" },
                { name: "Linux", color: "#264de4" }
            ]
        },
        {
            id: 2,
            title: "DA Personnelle",
            description: "Travail sur ma charte graphique personnelle",
            image: "image",
            tags: [
                { name: "Figma", color: "#68A063" },
                { name: "Illustrator", color: "#E0234E" }
            ]
        },
        {
            id: 3,
            title: "Projet 3",
            description: "Description du projet 3",
            image: "image",
            tags: [
                { name: "React", color: "#61DAFB" }
            ]
        },
         {
            id: 4,
            title: "Projet 4",
            description: "Description du projet 4",
            image: "image",
            tags: [
                { name: "Node", color: "#68A063" }
            ]
        },
    ];

    return (
        <div className="Workpage">
            <h2>projets personnels</h2>
            
            {/* Le wrapper pour le menu horizontal */}
            <div className="scroll-menu-wrapper">
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {projects.map((project) => (
                        <div 
                            className="card" 
                            key={project.id}
                            itemId={project.id} // Important pour la librairie
                            title={project.title}
                        >
                            <div className="card-image-placeholder">
                                <span>{project.image}</span>
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="tags-container">
                                {project.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="tag-pill" 
                                        style={{ backgroundColor: tag.color }}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </ScrollMenu>
            </div>

            <div className="btn_more">
                <a href="/tous-les-projets">Voir tous les projets</a>
            </div>
        </div>
    )
}