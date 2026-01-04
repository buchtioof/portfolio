import { GithubLogoIcon, DribbbleLogoIcon, LinkedinLogoIcon, AtIcon } from "@phosphor-icons/react"
import Draggable from "react-draggable";
import '../assets/css/home.css';

export default function Home() {
    return (
        <div className="Homepage">
            <div className="hero">
                <img className="logo_hero" src="/img/assets/logo/main.svg" alt="Logo du portfolio" />
                <div className="hero_right">
                    <h1 className="p_hero">salut, moi c'est ramzi idir ! étudiant en informatique au Conservatoire National des Arts et Métiers à Paris. je code principalement et design !</h1>
                    <div className="links">
                                    <a
                                        className="button github"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/buchtioof"
                                        aria-label="Github"
                                    >
                                        <GithubLogoIcon size={24} weight="bold" />
                                        <span>/buchtioof</span>
                                    </a>

                                    <a
                                        className="button dribbble"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://dribbble.com/ramziii__"
                                        aria-label="Dribbble"
                                    >
                                        <DribbbleLogoIcon size={24} weight="bold" />
                                        <span>/ramziii__</span>
                                    </a>

                                    <a
                                        className="button linkedin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/ramziidir/"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedinLogoIcon size={24} weight="bold" />
                                        <span>/ramziidir</span>
                                    </a>

                                    <a
                                        className="button mail"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:idir.ramzi@icloud.com"
                                        aria-label="Contact"
                                    >
                                        <AtIcon size={24} weight="bold" />
                                        <span>e-mail</span>
                                    </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}