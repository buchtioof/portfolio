import { GithubLogoIcon, DribbbleLogoIcon, LinkedinLogoIcon, AtIcon } from "@phosphor-icons/react"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <div className="container">
            <img src="./assets/img/logo.webp" alt="Logo du portfolio" />
            <TypeAnimation
                sequence={[
                    'salut monde 👋 ! je suis ramzi. actuellement étudiant en informatique au Conservatoire National des Arts et Métiers à Paris.',
                ]}
                wrapper="p"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', textAlign: 'center' }}
            />
            <div className="links">
                <a
                    className="button github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/buchtioof"
                    aria-label="Github"
                >
                    <GithubLogoIcon size={24} weight="bold" />
                    <span>Github</span>
                </a>

                <a
                    className="button dribbble"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dribbble.com/squickk"
                    aria-label="Dribbble"
                >
                    <DribbbleLogoIcon size={24} weight="bold" />
                    <span>Dribbble</span>
                </a>

                <a
                    className="button linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/i-663436272"
                    aria-label="LinkedIn"
                >
                    <LinkedinLogoIcon size={24} weight="bold" />
                    <span>Linkedin</span>
                </a>

                <a
                    className="button mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:idir.ramzi@icloud.com"
                    aria-label="Contact"
                >
                    <AtIcon size={24} weight="bold" />
                    <span>Contact</span>
                </a>
            </div>
        </div>
    );
}