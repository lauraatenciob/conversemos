import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <li><Link to="/">Inicio</Link></li>
            <li>Acerca de</li>
            <li><Link to="/categories">Categorias</Link></li>
            <li><Link to="/play">Jugar</Link></li>
        </nav>
    )
}

export default Nav;