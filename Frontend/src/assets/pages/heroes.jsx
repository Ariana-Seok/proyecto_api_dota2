import { Card } from '../components/card';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Bar } from '../components/bar';
import { CargaHeroes} from '../components/cargaHeroes';
import '../styles/general.css';


export function Heroes(){
    
    return(
        <>
        <Header />
        <main>
            <section className='vista_heroes'>
                <h2>ELIGE A TU HÉROE</h2>
                <p>Estrategas de la magia, feroces bestias y villanos astutos... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.</p>
                <Bar/>
                <Card />
            </section>

            <section className="cargar_heroes">
                <h2>CARGAR NUEVO HEROE</h2>
                <p>Colabora con nosotros para tener una gran variedad de heroes</p>
                <CargaHeroes />
            </section>
        </main>
        <Footer />
        </>
    )
}