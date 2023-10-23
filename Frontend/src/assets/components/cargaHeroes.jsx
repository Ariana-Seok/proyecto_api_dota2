import { useState } from "react";

export function CargaHeroes(){
    const [nuevoHeroe, setNuevoHeroe] = useState({
        nombre: '',
        atributo: '',
        tipo_de_ataque: '',
        complejidad: '',
        imagen: null,
        url_view: ''
    });

    const handleInputChange = (event) => {
        const { name, value, type, files } = event.target;
        setNuevoHeroe ({
            ...nuevoHeroe,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleImagenChange = (event) => {
        const imagen = event.target.files[0];
        setNuevoHeroe({
            ...nuevoHeroe,
            imagen,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('nombre', nuevoHeroe.nombre);
        formData.append('atributo', nuevoHeroe.atributo);
        formData.append('tipo_de_ataque', nuevoHeroe.tipo_de_ataque);
        formData.append('complejidad', nuevoHeroe.complejidad);
        
        if (nuevoHeroe.imagen){
            formData.append('imagen', nuevoHeroe.imagen);
        }

    try {
        const response = await fetch('/api/heroes', {
            method: 'POST',
            body: formData,
        });

        if(response.ok){
            const imagenUrl = await response.text();
            console.log(`URL de ubicacion de la imagen: ${imagenUrl}`);
            setNuevoHeroe({
                nombre: '',
                atributo: '',
                tipo_de_ataque: '',
                complejidad: '',
                imagen: null,
                url_view: ''
            })
            console.log('Heroe agregado exitosamente.');
        } else {
            console.log('Error al agregar el heroe.');
        }
    } catch (error) {
        console.log('Error de red al agregar el heroe:', error);
    }
/*
    const requestOptions = {
        method: 'POST',
        headers: {
            'Contend-Type': 'applicarion/json',
        },
        body: JSON.stringify(nuevoHeroe),
    };

    fetch('./api/heroesdota2', requestOptions)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Error al agregar el heroe');
        })
        .then(data => {
            console.log('Heroe agregado con exito!', data);
        })
        .catch(error => {
            console.error('Error al agregar el heroe:', error);
        })
        */
};


return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre de heroe:</label>
        <input 
            type="text" 
            name="nombre" 
            id="nombre" 
            value={nuevoHeroe.nombre} 
            onChange={handleInputChange} 
            required
        />

        <label htmlFor="atributo">Atributo:</label>
            <input 
                type="text" 
                name="atributo" 
                id="atributo" 
                value={nuevoHeroe.atributo} 
                onChange={handleInputChange} 
                required
            />

        <label htmlFor="tipo_de_ataque">Tipo de ataque:</label>
            <select 
                type="text" 
                name="tipo_de_ataque" 
                id="tipo_de_ataque" 
                value={nuevoHeroe.tipo_de_ataque} 
                onChange={handleInputChange} 
                required
            >
                <option value="cuerpo a cuerpo">Cuerpo a cuerpo</option>
                <option value="a distancia">A distancia</option>
            </select> 

        <label htmlFor="complejidad">Complejidad:</label>
            <input 
                type="number" 
                name="complejidad" 
                id="complejidad" 
                value={nuevoHeroe.complejidad} 
                onChange={handleInputChange} 
                required
            />

        <label htmlFor="url_view">URL de pagina:</label>
            <input 
                type="url" 
                name="url_view" 
                id="url_view" 
                value={nuevoHeroe.url_view} 
                onChange={handleInputChange} 
            />

        <input type="file"  accept="image/*" onChange={handleImagenChange}/>

        <button type="submit">Agregar Héroe</button>
    </form>
    );
}