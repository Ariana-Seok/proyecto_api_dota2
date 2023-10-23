// Aca deberiamos importar los componentes de la pagina de inicio
/*

import { Main } from ''


export function Inicio() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )

}

*/
import { Header } from '../components/header'
import { Footer } from '../components/footer'
export function Inicio(){
    return(
        <>
        <Header />
        <h1>Aca iria el resto de codigo</h1>
        <Footer />

        </>
    )
}