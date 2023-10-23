import errorPng from '../img/error404.png'
import { Link } from 'react-router-dom';
import '../styles/page404.css';
import 'animate.css';

export function PaginaError() {
    return (
        <div className = "contenedorError">
            <div className = "contenedor_img">
                <img  className = "img_error animate__animated animate__headShake" src = {errorPng} alt="imagen de error" />
            </div>
            <h1 className = "titulo_error">404 <span>Ha ocurrido un error</span></h1>
            <Link to='/inicio' className='btn_volver'>
                Volver a la pagina de inicio
            </Link>
        </div>
    )
}