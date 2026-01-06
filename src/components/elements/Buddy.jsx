import { useState } from "react";
import '/src/assets/css/elements/buddy.css';


export default function RandomLogo() {
    // 1. Définir l'image de base et les variantes
    const mainLogo = "/img/assets/logo/main.svg";
    const variants = [
        "/img/assets/logo/var1.svg",
        "/img/assets/logo/var2.svg",
        "/img/assets/logo/var3.svg",  
        "/img/assets/logo/var4.svg", 
        "/img/assets/logo/var5.svg",
    ];

    // 2. L'état initial est toujours l'image principale
    const [currentLogo, setCurrentLogo] = useState(mainLogo);

    // 3. Au survol : on choisit une variante au hasard
    const handleMouseEnter = () => {
        if (variants.length > 0) {
            const randomVariant = variants[Math.floor(Math.random() * variants.length)];
            setCurrentLogo(randomVariant);
        }
    };

    // 4. Quand la souris part : on revient à l'image principale
    const handleMouseLeave = () => {
        setCurrentLogo(mainLogo);
    };

    return (
        <img 
            className="logo_hero" 
            src={currentLogo} 
            alt="Logo du portfolio" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}