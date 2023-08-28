
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';



function App() {

  return (
    <div>
      {/* Rutas */}
      <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          
      </Routes>

    </div>

  );
}

export default App;
