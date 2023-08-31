import style from '../Home/Home.module.css';
import Forms from '../Forms/Forms';
import {Link} from "react-router-dom";


const Home = ()=>{
    return (
        //Pagina de Home: Que permite Buscar dogs por API y los creados en la BD.
        <div className={style.contenedor}>
            <h1 className={style.Titulo}>CONOCE A "THE DOGS"</h1>

            <input className={style.input} type='search'/>
            <buton className={style.btnB} onClick="">BUSCAR DOGS</buton>
            
            <Link to='/creardog'>
                <buton className={style.btnC}>INGRESAR DOGS</buton>
            </Link>
           
            <input className={style.check} type='checkbox' name='temperamento'/>
            <label className={style.check} for="ok">Filtrar por Temperamento</label>
          
            


            <select className={style.ordenar}> 
                <option value="ascendete">Ascendente</option>
                <option value="aescendente">Descendente</option>
                <option value="raza">Por Raza</option>
            </select>
            
        </div>
    )
};

export default Home;