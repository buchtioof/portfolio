import "../assets/css/navbar.css"
import SwitchTheme from "./elements/SwitchTheme.jsx"
import { useEffect, useState } from "react"
import { HouseIcon, BrainIcon, PaletteIcon } from "@phosphor-icons/react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = [
      document.getElementById("home"),
      document.getElementById("skills"),
      document.getElementById("works"),
    ].filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            // update the hash without scrolling (so anchors still work)
            history.replaceState(null, "", `#${entry.target.id}`)
          }
        })
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    // allow default anchor navigation, but also set active immediately
    setActive(id)
  }

  return (
    <div className="navbar backdrop-blur">
      <a href="#home" className={active === "home" ? "active" : ""} data-section="home" onClick={(e) => handleClick(e, "home")}>
        <HouseIcon className="icon" size={24} weight="bold" />
        <span className="btn_nav">Accueil</span>
      </a>
      <a href="#works" className={active === "works" ? "active" : ""} data-section="works" onClick={(e) => handleClick(e, "works")}>
        <PaletteIcon className="icon" size={24} weight="bold" />
        <span className="btn_nav">Projets</span>
      </a>
      <a href="#skills" className={active === "skills" ? "active" : ""} data-section="skills" onClick={(e) => handleClick(e, "skills")}>
        <BrainIcon className="icon" size={24} weight="bold" />
        <span className="btn_nav">Compétences</span>
      </a>
      {/* <SwitchTheme/> */}
    </div>
  )
}