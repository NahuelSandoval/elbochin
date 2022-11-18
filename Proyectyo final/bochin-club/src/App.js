import './App.css';
import Footer from './componentes/footer/footer';
import Navbar from './componentes/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (

<BrowserRouter>

    <div className='App'>

      <Navbar />






      <Footer />

    </div>
</BrowserRouter>
  );
}

export default App;
