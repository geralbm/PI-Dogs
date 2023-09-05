import style from '../Forms/Forms.module.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Forms = ()=> {

    // Guardar los Inputus:Defino un estado LOCAL para cada input - Destructuring
    const [forms, setForms] = useState({
        nombre:'',
        alturamax:'',
        alturamin:'',
        peso:'',
        años:'',
        temperamento:''

    }) //Un unico Estado inicial - Un objeto con todos las propiedas requeridas.
    

    const handlerForms= (event)=>{
        // setForms(event.target.value) //se actualizar el valor del input, a traves del target.value
        // Bindear los datos para que no se pueda cambiar los datos desde el navegador - Input igual al value.
        
        setForms ({
            ...forms,
           [event.target.nombre]:event.target.name
        })
    };

    const handlerSubmit = (event)=>{
        // maneja el refresh del form - solo para los forms! 
        event.preventDefault();
    }


    return (
        <div className={style.form}>
            <form onSubmit={handlerSubmit}> 
            {/* Se limpia y refresca la pagina y por ello usamos onSubmit que usa el handlerSubmit */}
                <h1 className={style.Titulo1}>INGRESA UN DOG: </h1>
                <h2 className={style.Titulo2}>INGRESAR LOS SIGUIENTES DATOS:</h2>

                <div>
                    <label className={style.caja}htmlFor="nombre">Nombre: </label>
                    <input className={style.input}value={forms.nombre} type="text" name="nombre" onChange={handlerForms} placeholder="Completar"/>
                    
                    <label className={style.caja} htmlFor="altura">Altura Máxima: </label>
                    <input className={style.input} value={forms.alturamax} type="text" name="altura max" onChnge={handlerForms} placeholder="Completar"/>

                    <label className={style.caja} htmlFor="altura">Altura Mínima: </label>
                    <input className={style.input}value={forms.alturamax} type="text" name="altura min" onChnge={handlerForms} placeholder="Completar"/>

                    <label className={style.caja} htmlFor="peso">Peso: </label>
                    <input  className={style.input} value={forms.peso} type="text" name="peso" onChnge={handlerForms} placeholder="Completar"/>

                    <label className={style.caja} htmlFor="años">Años: </label>
                    <input className={style.input} value={forms.años}type="text" name="años" onChnge={handlerForms} placeholder="Completar"/>

                    {/* OJO FALTA ADD PARA QUE AGREGUE MAS DE 1 TEMPERAMENTO */}
                    <label className={style.caja} htmlFor="temperamento">Temperamento: </label>
                    <input className={style.input}  value={forms.temperamento}type="text" name="temperamento" onChnge={handlerForms} placeholder="Completar"/>
                    <button className={style.btnT}>Agregar Temperamento</button>
                    <button className={style.btnT2}>Agregar otro Temperamento</button>
                </div>

                
                <button className={style.btnE}type="submit">ENVIAR</button>

                <Link to='/home'> 
                    <button className={style.btnC}>CANCELAR</button>
                </Link>


            </form>
        </div>
    )
};


export default Forms;