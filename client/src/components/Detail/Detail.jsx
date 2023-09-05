import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Detail = ()=>{

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://api.thedogapi.com/v1/breeds/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No existen "The Dog" con esa referencia!!!');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <img src={character.reference_image_id && character.reference_image_id} alt="" />
            <h2>Nombre: "{character.name && character.name}"</h2>
            <h2>Altura: "{character.height && character.height}"</h2>
            <h2>Peso: "{character.weight && character.weight}"</h2>
            <h2>Temperamento: "{character.temperament && character.temperament}"</h2>
            <h2>Años de  Vida: "{character.life_span && character.life_span}"</h2>
            <Link to='/home'> 
            <button>Volver</button>
            </Link>
            
        </div>
    )
};

export default Detail;