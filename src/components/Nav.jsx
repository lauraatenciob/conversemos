import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";

function Nav() {
  const [activeHam, setActiveHam] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link to="/"><i class="fa-solid fa-house"></i> Inicio</Link>
      </li>
      <li>
        <Link to="/categories"><i class="fa-solid fa-table-list"></i> Categorías</Link>
      </li>
      <li>
        <Link to="/play"><i class="fa-solid fa-face-grin-wink"></i> Jugar</Link>
      </li>
      <li>
        <Link to="/#info-section"><i class="fa-solid fa-circle-question"></i> Acerca de</Link>
      </li>
    </>
  );

  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-container">
          <Logo />
          <div className="menu">{menuItems}</div>
          <button
            className={
              activeHam ? "hamburguer active-hamburguer" : "hamburguer"
            }
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>
  );
}

export default Nav;
