import { useState, useEffect } from "react";
import '../styles/heroes.css';

export function Card() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('/api/heroesdota2')
            .then((response) => response.json())
            .then((data) => setHeroes(data))
            .catch((error) => console.log('Error:', error));
    }, []);

    return(
        <div className="contenedor_heroes">
            {
                heroes.map((heroe) => (
                    <a href={heroe.url_view} className="contenedor_heroe" key={heroe.id}>
                        <img src={heroe.imagen} alt="heroe.name" />
                        
                        <div className="info">
                            <h2>{heroe.nombre}</h2>
                            <p>Atributo: {heroe.atributo}
                            <span>Tipo de ataque: {heroe.tipo_de_ataque}</span>
                            </p>
                        </div>
                    </a>
                ))
            }
        </div>
        
    );
}