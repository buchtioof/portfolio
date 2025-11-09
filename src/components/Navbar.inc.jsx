import { Link } from "react-router-dom";
import "../assets/css/lib/scheme.css";
import "../assets/css/Navbar.css";

export default function Navbar() {
  return (
    <div class="Navbar">
        <Link to="/">
            <a>
                <i class="ph-fill ph-house" style="color: var(--navicons-home); font-size: 24px;"></i>
                <span>Accueil</span>
            </a>
        </Link>
        <Link to="/work">
            <a>
                <i class="ph-bold ph-palette" style="color: var(--navicons-color); font-size: 24px;"></i>
                <span>Travaux</span>
            </a>
        </Link>
        <a id="theme-toggle" class="icon-only">
            <i class="ph-bold ph-sun" id="icon-sun" style="color: var(--navicons-color); font-size: 24px;"></i>
            <i class="ph-bold ph-moon" id="icon-moon" style="color: var(--navicons-color); font-size: 24px;"></i>
        </a> 
    </div>
  );
}