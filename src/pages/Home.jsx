import { GithubLogoIcon, DribbbleLogoIcon, LinkedinLogoIcon, AtIcon } from "@phosphor-icons/react"
import { TypeAnimation } from 'react-type-animation';
import Draggable from "react-draggable";
import '../assets/css/home.css';

export default function Home() {
    return (
        <div className="container">
            <img src="../public/img/logo.webp" alt="Logo du portfolio" />
            <div className="hero">
                <div className="hero_head">
                    <h1>salut monde !</h1>      
                    <img class="globe_emoji" src="./img/icons/globe.gif" alt="Earth globe in 3D rotating on itself"></img>
                </div>
                <TypeAnimation
                    sequence={[
                        'je suis ramzi. actuellement étudiant en informatique au Conservatoire National des Arts et Métiers à Paris.',
                    ]}
                    wrapper="p"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', textAlign: 'center' }}
                />
            </div>
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
    );
}