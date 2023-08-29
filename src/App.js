import './App.css';
import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './pages/Contato/contato';
import Fotos from './pages/Fotos/fotos';
import Comentarios from './pages/Comentários/comentarios';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/DnD-React' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
