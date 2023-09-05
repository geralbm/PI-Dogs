
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Forms from './components/Forms/Forms';
import Detail from './components/Detail/Detail';
import SearchBar from './components/SearchBar/SearchBar';
import Cards from './components/Cards/Cards';





function App() {

    const URL_BASE="";
    const API_KEY_GERAL= '';


  return (
    <div>
      {/* Rutas */}
      <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/home' element={<SearchBar/>}></Route>
          <Route path='/home' element={<Cards/>}/>
          <Route path='/creardog' element={<Forms/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          
      </Routes>

    </div>

  );
}

export default App;
