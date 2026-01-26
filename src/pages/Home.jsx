import {GithubLogoIcon, DribbbleLogoIcon, LinkedinLogoIcon, AtIcon} from "@phosphor-icons/react"
import Draggable from "react-draggable";
import Buddy from "../components/elements/Buddy"
import WordPopover from "../components/elements/WordPopover"
import '../assets/css/home.css';

export default function Home() {
    return (
        <div className="Homepage">
            <div className="hero">
                <Buddy></Buddy>
                <div className="hero_right">
                    <h1 className="p_hero">
                        salut, moi c'est ramzi idir ! étudiant en informatique au
                        <br></br>
                        <a href="https://maps.apple.com/place?place-id=I98611BA115CE2DF1&address=292+Rue+Saint-Martin%2C+75003+Paris%2C+France&coordinate=48.86642604034651%2C2.354974150657654&name=Conservatoire+national+des+arts+et+m%C3%A9tiers" target="_blank">
                            <WordPopover 
                                word="Conservatoire National des Arts et Métiers à Paris." 
                                title="Conservatoire National des Arts et Métiers" 
                                location="Paris 3e Arrondissement, France" 
                                imageSrc="/img/assets/cnam.png"
                            />
                        </a>
                        <br></br>
                        je suis un développeur et administrateur systemes amoureux de bons designs !</h1>
                    <div className="links">
                        <a className="button github" target="_blank" rel="noopener noreferrer" href="https://github.com/buchtioof" aria-label="Github">
                            <GithubLogoIcon size={24}
                                weight="bold"/>
                            <span>/buchtioof</span>
                        </a>

                        <a className="button dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/ramziii__" aria-label="Dribbble">
                            <DribbbleLogoIcon size={24}
                                weight="bold"/>
                            <span>/ramziii__</span>
                        </a>

                        <a className="button linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ramziidir/" aria-label="LinkedIn">
                            <LinkedinLogoIcon size={24}
                                weight="bold"/>
                            <span>/ramziidir</span>
                        </a>

                        <a className="button mail" target="_blank" rel="noopener noreferrer" href="" aria-label="Contact">
                            <AtIcon size={24}
                                weight="bold"/>
                            <span>e-mail</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
