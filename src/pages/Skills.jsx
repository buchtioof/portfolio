import Magnet from '../components/elements/Magnet.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx';
import '../assets/css/skills.css';

export default function Skills(){
    return(
        <div className="Skillspage">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={4}
                textClassName="h1-skills"
            >
                développer l'idée dans mon cahier et l'imaginer sur Figma pour lui donner forme avec React et enfin la vie avec PhP 
            </ScrollReveal>
        </div>
    )
}