import { useEffect } from 'react';
import '../assets/css/work.css';

export default function Works() {
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // La carte entre dans l'écran : elle apparaît
                    entry.target.classList.add('visible');
                } else {
                    // La carte sort de l'écran : elle disparaît
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 }); // Se déclenche dès que 10% de la carte est visible/invisible

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => observer.observe(card));

        return () => cards.forEach(card => observer.unobserve(card));
    }, []);

    // 2. Vos données de projets (plus facile à modifier ici)
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
            title: "DA Personnelle",
            description: "Travail sur ma charte graphique personnelle",
            image: "image",
            tags: [
                { name: "Figma", color: "#68A063" },
                { name: "Illustrator", color: "#E0234E" }
            ]
        },
    ];

    return (
        <div className="Workpage">
            <h2>projets personnels</h2>
            
            <div className="cards-container">
                {projects.map((project) => (
                    <div className="card" key={project.id}>
                        <div className="card-image-placeholder">
                            <span>{project.image}</span>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        {/* Tags en forme de pills */}
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
            </div>

            {/* Le bouton "Voir plus" */}
            <div className="btn_more">
                <a href="/tous-les-projets">Voir tous les projets</a>
            </div>
        </div>
    )
}