import {Link} from 'react-router-dom';
import style from '../Card/Card.module.css';


const Card = ({id, name, reference_image_id, height, weight, temperament, life_span, onClose}) => {
    return(
         
        <div className={style.contenedor}>
            <Link to= {`/detail/${id}`}>
                <button onClick={()=> {onClose(id)}}>X</button>
                <h2>ID: {id}</h2>
                <h2>Nombre: {name}</h2>
                <h2>Altura: {height}</h2>
                <h2>Peso: {weight}</h2>
                <h2>Temperamento: {temperament}</h2>
                <h2>Años de Vida: {life_span}</h2>
                <img className={style.image} src={reference_image_id} alt={name}/>
            </Link>
        </div>
    )
};


export default Card;