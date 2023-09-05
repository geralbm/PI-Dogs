
import style from '../SearchBar/SearchBar.module.css';
import {useState} from 'react';
import {Link} from "react-router-dom";

const SearchBar = ({onSearch})=>{
    const [id,setId] = useState ('');

    const handleChange = (event) => {
        setId (event.target.value) //valor que se escribio.
    };

    return(
        <div>

        <Link to = "/home">
            <input className={style.input} type='search' value={id} onChange={handleChange} />
            <button className={style.btnB} onClick={()=>onSearch(id)}>BUSCAR DOGS</button>
        </Link>
        
     </div>
    )
};

export default SearchBar;