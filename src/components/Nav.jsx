import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";

function Nav({ colorWhite }) {
  const [activeHam, setActiveHam] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link to="/">
          <i class="fa-solid fa-house"></i> Inicio
        </Link>
      </li>
      <li>
        <Link to="/categories">
          <i class="fa-solid fa-table-list"></i> Categorías
        </Link>
      </li>
      <li>
        <Link to="/play">
          <i class="fa-solid fa-face-grin-wink"></i> Jugar
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar-container">
      <nav>
        <div
          className="nav-container"
          style={{
            color: colorWhite && activeHam === false ? "#f2f0f4" : "#ff5970",
          }}
        >
          <Logo />
          <div className="menu">{menuItems}</div>
          <button
            className={
              activeHam ? "hamburguer active-hamburguer" : "hamburguer"
            }
            onClick={() => setActiveHam(!activeHam)}
            style={{
              color: "inherit",
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && (
        <div
          className="nav-dropdown"
          style={{
            color: colorWhite && activeHam === false ? "#f2f0f4" : "#ff5970",
          }}
          onClick={() => setActiveHam(!activeHam)}
        >
          {menuItems}
        </div>
      )}
    </div>
  );
}

export default Nav;
