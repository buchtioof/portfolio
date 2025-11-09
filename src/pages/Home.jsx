export default function Home() {
    return (
        <div className="container">
            {/* Intro */}
                <div className="paragraph">
                    <p>
                        salut monde <img
                        className="globe_emoji"
                        src="/img/globe.gif"
                        alt="Earth globe in 3D rotating on itself"
                    />! je suis ramzi. je suis actuellement étudiant en informatique au <a className="p_link" target="_blank" rel="noopener noreferrer" href="https://www.univ-spn.fr/">
                            Conservatoire National des Arts et Métiers 
                        </a>à Paris.
                    </p>
                </div>

            {/* Links */}
            <div className="links">
                <a
                    className="button github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/buchtioof"
                    aria-label="Github"
                >
                    <i
                        className="ph-bold ph-github-logo"
                        style={{ color: 'var(--github-color)', fontSize: 24 }}
                    />
                    <span>Github</span>
                </a>

                <a
                    className="button dribbble"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dribbble.com/squickk"
                    aria-label="Dribbble"
                >
                    <i
                        className="ph-bold ph-dribbble-logo"
                        style={{ color: 'var(--dribbble-color)', fontSize: 24 }}
                    />
                    <span>Dribbble</span>
                </a>

                <a
                    className="button linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/i-663436272"
                    aria-label="LinkedIn"
                >
                    <i
                        className="ph-bold ph-linkedin-logo"
                        style={{ color: 'var(--linkedin-color)', fontSize: 24 }}
                    />
                    <span>Linkedin</span>
                </a>

                <a
                    className="button mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:ramzi.idir@proton.me"
                    aria-label="Contact"
                >
                    <i
                        className="ph-bold ph-at"
                        style={{ color: 'var(--contact-color)', fontSize: 24 }}
                    />
                    <span>Contact</span>
                </a>
            </div>
        </div>
    );
}