import Carousel from "../components/elements/Carousel"
import '../assets/css/work.css';

export default function Works() {

    return (
        <div className="Workpage">
            <img className="buddy_worker" src="/img/assets/logo/work.svg" alt="icon work part" />
            <h2>projets personnels</h2>
            <p>liste de quelques projets sur lesquels j'ai pu travailler et experimenter avec de nouveaux outils ou en approfondissant mes compétences actuelles.</p>
            { /*<div className="btn_more">
                <a href="WIP">Voir tous les projets</a>
            </div>*/
            }
            <Carousel></Carousel>
        </div>
    )
}