import {Link} from "react-router-dom";
import style from '../Landing/Landing.module.css';

const Landing = () => {
    return (
        // Landing Page
        <div>
            <h1 className={style.Titulo}>BIENVENIDOS AL SITIO: THE DOGS</h1>
            <Link to ='/home'>
                <button className={style.btn}>Ingresar</button>
            </Link>
        </div>
    )
} ;

export default Landing;