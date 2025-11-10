import { Link } from "react-router-dom"
import "../assets/css/navbar.css"
import ButtonSwitchTheme from "./elements/ButtonSwitchTheme.jsx"
import { HouseIcon, PaletteIcon } from "@phosphor-icons/react"

export default function Navbar() {
  return (
    <div className="navbar backdrop-blur">
      <Link to="/">
        <HouseIcon size={24} weight="bold" />
        <span>Accueil</span>
      </Link>
      <Link to="/work">
        <PaletteIcon size={24} weight="bold" />
        <span>Travaux</span>
      </Link>
      <ButtonSwitchTheme/>
    </div>
  );
}