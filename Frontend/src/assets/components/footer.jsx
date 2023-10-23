import logoValve from "../img/Valve.png";
import logoDota from "../img/logo.png";

export function Footer() {
    return (
        <>
            <footer>
                <div className="logos">
                    <div className="img">
                        <img src={logoValve} alt="Logo de Valve" />
                    </div>
                    
                    <div className="img">
                        <img src={logoDota} alt="Logo de Valve" />
                    </div>
                </div>
                <p>Dota y el logotipo de Dota son marcas comerciales y/o marcas comerciales registradas de Valve Corporation. 2023 Valve Corporation , todos los derechos reservados.</p>
            </footer>
        </>
    )
}