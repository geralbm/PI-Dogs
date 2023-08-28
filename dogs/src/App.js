import style from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Home from './components/Home/Home';


function App() {


  
  return (
    <div className={style.App}>
      {/* Landing Page */}
      <h1 className={style.Titulo}>BIENVENIDOS AL SITIO: THE DOGS</h1>
      <Link to ='/home'>
        <button className={style.btn}>Ingresar</button>
      </Link>

    
    
    {/* Rutas */}
    <Routes>
         {/* <Route path='/' element={<App/>}></Route> */}
         <Route path='/home' element={<Home/>}></Route>
        
    </Routes>
    </div>
    
   
   
    
 
  

  );
}

export default App;
