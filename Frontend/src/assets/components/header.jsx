import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import logoDota2 from '../img/logo.png';

export function Header(){
    return (
        <header>
            <nav className="nav_principal">
                <Link to="/inicio" className="logo">
                    <img src={logoDota2} alt="Logo de Dota2" />
                    <h1>DOTA 2</h1>
                </Link>
    
                <ul className="nav_opc">
                    <li><Link  to="/juego">JUEGO</Link></li>
                    <li><Link  to="/heroes">HÉROES</Link></li>
                    <li><Link  to="/noticias">NOTICIAS</Link></li>
                    <li><Link  to="/esports">ESPORTS</Link></li>
                </ul>
            </nav>
        </header>
    )
}