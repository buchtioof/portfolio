import "../assets/css/navbar.css"
import SwitchTheme from "./elements/SwitchTheme.jsx"
import { useEffect, useState } from "react"
import { HouseIcon, BrainIcon, PaletteIcon } from "@phosphor-icons/react"

export default function Navbar() {
  // Etat local 'active' : contient l'id de la section actuellement considérée
  // comme active (par défaut 'home'). Utilisé pour appliquer la classe CSS
  // qui surligne le lien actif.
  const [active, setActive] = useState("home")

  // Effet exécuté au montage du composant : création d'un
  // IntersectionObserver pour synchroniser l'état 'active' avec la
  // section visible lors du scroll.
  useEffect(() => {
    // Récupère les éléments DOM correspondant aux sections ciblées.
    // Si une section n'existe pas, filter(Boolean) retire les null.
    const sections = [
      document.getElementById("home"),
      document.getElementById("skills"),
      document.getElementById("works"),
    ].filter(Boolean)

    // Si aucune section trouvée, on ne fait rien.
    if (!sections.length) return

    // Création de l'observer : callback appelé quand une section entre
    // ou sort de la zone d'intersection.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting === true quand l'élément est dans la
          // zone définie par root/rootMargin/threshold.
          if (entry.isIntersecting) {
            // Met à jour l'état 'active' avec l'id de la section
            // visible (p.ex. 'skills'). Cela déclenchera le rendu et
            // appliquera la classe 'active' au lien correspondant.
            setActive(entry.target.id)
            // Remplace le fragment d'URL (hash) sans provoquer de
            // défilement supplémentaire ni ajouter une entrée dans
            // l'historique (utile pour le partage de lien).
            history.replaceState(null, "", `#${entry.target.id}`)
          }
        })
      },
      // Options : root=null => viewport; rootMargin décale la zone
      // d'intersection vers le centre (-40% top/bottom) ; threshold=0
      // déclenche dès qu'une petite partie entre dans la zone.
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    // Attache l'observer à chaque section trouvée.
    sections.forEach((s) => observer.observe(s))

    // Cleanup : au démontage du composant, déconnecter l'observer pour
    // éviter des callbacks après démontage et les fuites mémoire.
    return () => observer.disconnect()
  }, [])

  // Handler appelé au clic sur un lien de la navbar.
  const handleClick = (e, id) => {
    // On ne preventDefault pas : on laisse l'ancre gérer le scroll
    // natif vers la section. Par contre, on met à jour l'état 'active'
    // immédiatement pour que l'UI réagisse sans attendre le scroll.
    setActive(id)
  }

  return (
    <div className="navbar backdrop-blur">
      <a href="#home" className={active === "home" ? "active" : ""} data-section="home" onClick={(e) => handleClick(e, "home")}>
        <HouseIcon className="icon" size={24} weight="bold" />
        <span className="titlesbtn">Accueil</span>
      </a>
      <a href="#skills" className={active === "skills" ? "active" : ""} data-section="skills" onClick={(e) => handleClick(e, "skills")}>
        <BrainIcon className="icon" size={24} weight="bold" />
        <span className="titlesbtn">Compétences</span>
      </a>
      <a href="#works" className={active === "works" ? "active" : ""} data-section="works" onClick={(e) => handleClick(e, "works")}>
        <PaletteIcon className="icon" size={24} weight="bold" />
        <span className="titlesbtn">Projets</span>
      </a>
      {/* <SwitchTheme/> */}
    </div>
  )
}