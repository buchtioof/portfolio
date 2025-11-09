import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export default function ButtonSwitchTheme() {

    // Fonction pour déterminer le thème au premier chargement.
    const getInitialTheme = () => {
        // window.matchMedia lit les réglages du système.
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark" // Si le système est en mode sombre
            : "light"; // Sinon, on utilise le mode clair par défaut
    };

    // Initialise l'état 'theme' de notre composant.
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // Change l'attribut 'data-theme' de la balise <html>.
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        // 't' représente la valeur *actuelle* du thème.
        // Si 't' est "dark", on retourne "light", sinon on retourne "dark".
        setTheme((t) => (t === "dark" ? "light" : "dark"));
    };

    // Une simple variable booléenne pour rendre le code JSX (ci-dessous) plus lisible.
    const isDark = theme === "dark";

    return (
        <button className="icon" type="button" aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"} onClick={toggleTheme}>
            {isDark ? <MoonIcon size={24} weight="bold" /> : <SunIcon size={24} weight="bold" />}
        </button>
    );
}