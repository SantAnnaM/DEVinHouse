import React from 'react';
import { Header } from './components/Pages/header/Header';
import { Footer } from './components/Pages/footer/Footer';

import './App.css';

/* 
Criação de menu (navbar) no topo do site
Crie um componente e adicione a logo, nome da aplicação e um item de menu chamado cardápio;
Adicione o componente no app da aplicação;
Valide se está tudo funcionando;
Realize o commit no github.
*/


function App() {
  return (
    
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
};

export default App;