import "../assets/css/navbar.css"
import SwitchTheme from "./elements/SwitchTheme.jsx"
import { HouseIcon, PaletteIcon, FlowerIcon } from "@phosphor-icons/react"

export default function Navbar() {
  return (
    <div className="navbar backdrop-blur">
      <a href="#home">
        <HouseIcon size={24} weight="bold" />
        <span>Accueil</span>
      </a>
      <a href="#works">
        <PaletteIcon size={24} weight="bold" />
        <span>Travaux</span>
      </a>
      {/* <SwitchTheme/> */}
    </div>
  );
}