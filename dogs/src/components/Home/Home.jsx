import style from '../Home/Home.module.css';

const Home = ()=>{
    return (
        //Pagina de Home: Que permite Buscar dogs por API y los creados en la BD.
        <div className={style.contenedor}>
            <h1 className={style.Titulo}>CONSULTA A "THE DOGS"</h1>
        </div>
    )
};

export default Home;