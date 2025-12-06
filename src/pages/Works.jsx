import '../assets/css/work.css';

export default function Works(){
    // Exemple de données pour générer tes cartes dynamiquement
    const projects = [
        {
            id: 1,
            title: "Portfolio",
            description: "Ce même site que vous êtes en train de visiter, fait avec React.",
            tags: [
                { name: "React", color: "#FFADAD" },
                { name: "HTML/CSS", color: "#FFD6A5" }
            ]
        },
        {
            id: 2,
            title: "dribbble",
            description: "Ce même site que vous êtes en train de visiter, fait avec React.",
            tags: [
                { name: "Figma", color: "#FFADAD" },
                { name: "Suite Adobe", color: "#FFD6A5" }
            ]
        },
        {
            id: 3,
            title: "affiches",
            description: "la j'ai pas d'inspi pour le placeholder",
            tags: [
                { name: "Figma", color: "#FFADAD" },
                { name: "Suite Adobe", color: "#FFD6A5" }
            ]
        },
        // Tu pourras ajouter d'autres projets ici
    ];

    return(
        <div className="Workpage">
            <h1>Travaux</h1>
            <p>Voici plusieurs projets sur lesquels j'ai pu travailler personnellement et en école (puis en entreprise un de ces quatres)</p>
            <div className="cards-container">
                {projects.map((project) => (
                    <div className="card" key={project.id}>
                        <div className="card-image-placeholder">
                            <span>Image du projet</span>
                        </div>
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
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <div className="card btn_more">
                <h2>Voir tous mes projets</h2>
            </div>
        </div>
    )
}