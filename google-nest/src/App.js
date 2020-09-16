import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import PequenoPoderoso from './components/pequenoPoderoso/pequenoPoderoso';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <PequenoPoderoso />
    </div>
  );
}

export default App;
