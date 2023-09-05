import style from '../Home/Home.module.css';
import {Link} from "react-router-dom";
import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Cards from '../Cards/Cards';



const Home = () =>{

  const [characters, setCharacters] = useState([]);

  const onSearch = (id)=> {
    axios(`https://api.thedogapi.com/v1/breeds/${id}`).then (({data}) =>{
      if (data.name){
        setCharacters((oldChars) => [...oldChars, data]);
        
       
      }else {
        window.alert ('No existen "The Dog" con esa referencia. ');
      }

    });
  };


  const onClose = (id)=>{
    setCharacters(
       characters.filter(char => {
          return char.id !== Number(id)
       })
    )
 };



    return (
        //Pagina de Home: Que permite Buscar dogs por API y los creados en la BD.
        <div className={style.contenedor}>
            <h1 className={style.Titulo}>CONOCE A "THE DOGS"</h1>

            <SearchBar onSearch={onSearch}/>


            <Link to='/home'>
              <Cards characters={characters} onClose={onClose}/>
            </Link>
          
            
            <Link to='/creardog'>
                <buton className={style.btnC}>CREAR DOGS</buton>
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