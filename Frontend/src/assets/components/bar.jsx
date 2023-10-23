import '../styles/bar.css'
import atributoFuerza from '../../../public/img/atributoFuerza.webp';
import atributoAgilidad from '../../../public/img/atributoAgilidad.webp';
import atributoInteligencia from '../../../public/img/atributoInteligencia.webp';
import atributoUniversal from '../../../public/img/atributoUniversal.webp';
import { BsFillDiamondFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

export function Bar(){

    return (
        <div className="contenedor_barra">
            <div className="contenedor_barra_busqueda">
                <span>FILTRAR HÉROES</span>
                <div className="btn_opcs">
                    <label htmlFor="atributo" >ATRIBUTO</label>
                    <button className='btn_atributo' value="fuerza" ><img src={atributoFuerza} alt="atributo_fuerza" /></button>
                    <button className='btn_atributo' value="agilidad"><img src={atributoAgilidad} alt="atributo_fuerza" /></button>
                    <button className='btn_atributo' value="inteligencia"><img src={atributoInteligencia} alt="atributo_fuerza" /></button>
                    <button className='btn_atributo' value="universal"><img src={atributoUniversal} alt="atributo_fuerza" /></button>
                </div>
                <div className="btn_opcs">
                    <label htmlFor="complejidad" >COMPLEJIDAD</label>
                    <button className='btn_complejidad' value="1"> <BsFillDiamondFill className='icono_rombo'/> </button>
                    <button className='btn_complejidad' value="2"> <BsFillDiamondFill className='icono_rombo'/> </button>
                    <button className='btn_complejidad' value="3"> <BsFillDiamondFill className='icono_rombo'/> </button>
                </div>
                <div className="barra_busqueda">
                    <BiSearch className='icono_busqueda'/>
                    <input type="text" name="buscar"/>
                </div>
            </div>

        </div>

    );
}