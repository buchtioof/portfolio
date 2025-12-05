import '../assets/css/work.css';

export default function Works(){
    // Liste de vos projets
    const projectsData = [
        {
            id: 1,
            tags: ["design"],
            image: "/img/works/dribbble.png",
            title: "dribbble",
            description: "Fourre tout de mes designs réalisés sur Figma et autres outils de design."
        },
        {
            id: 2,
            title: "Projet 2",
            description: "Description du projet 2. Une autre réalisation intéressante."
        },
        {
            id: 3,
            title: "Portfolio",
            description: "Ce site web, réalisé avec React et Vite."
        }
    ];

    return(
        <div className="Workpage">
            <h1>Travaux</h1>
            <div className="cards-container">
                {projectsData.map((project) => (
                    <div className="card" key={project.id}>
                        <span>{project.tags}</span>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {/* Vous pourrez ajouter des boutons ou liens ici plus tard */}
                    </div>
                ))}
            </div>
        </div>
    )
}