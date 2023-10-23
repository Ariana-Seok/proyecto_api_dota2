import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Inicio } from './inicio';
import { Heroes } from './heroes';
import '../styles/general.css'
import { PaginaError } from './paginaError';

function App() {
    return (
            <>

                <BrowserRouter>
                    <Routes>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/heroes" element={<Heroes/>}/>
                    <Route path="*" element={<PaginaError/>}/>
                    </Routes>
                </BrowserRouter>

            </>
        )
}

export default App
