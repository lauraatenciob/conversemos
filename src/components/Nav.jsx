import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";

function Nav() {
  const [activeHam, setActiveHam] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/">Acerca de</Link>
      </li>
      <li>
        <Link to="/categories">Categorias</Link>
      </li>
      <li>
        <Link to="/play">Jugar</Link>
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
