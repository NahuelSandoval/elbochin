import './App.css';
import Footer from './componentes/footer/footer';
import NavBarExamples from './componentes/navbar/navbar';
import Home from './componentes/home'
import Contacto from './componentes/contacto'
import Nosotros from './componentes/nosotros'
import Tienda from './componentes/tienda'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./componentes/estilos/home.css"

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExamples />}>
            <Route index element={<Home />} />
            <Route path='nosotros' element={<Nosotros />} />
            <Route path='tienda' element={<Tienda />} />
            <Route path='contacto' element={<Contacto />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
/*     <div>
      <Footer />
    </div> */
  );
}

export default App;
