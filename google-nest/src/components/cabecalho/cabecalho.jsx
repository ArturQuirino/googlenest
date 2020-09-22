import React, { Component } from 'react';
import './cabecalho.css';

function fixarCabecalhoNoScroll() {
  var headerInferior = document.getElementsByClassName(
    'cabecalho__parte-inferior'
  )[0];
  var sticky = headerInferior.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      headerInferior.classList.add('sticky');
    } else {
      headerInferior.classList.remove('sticky');
    }
  }

  window.onscroll = function () {
    myFunction();
  };
}

class Cabecalho extends Component {
  componentDidMount() {
    fixarCabecalhoNoScroll();
  }
  render() {
    return (
      <header className="cabecalho">
        <div className="cabecalho__parte-superior">
          <span>Google Store</span>
          <span>Segunda geração do nest mini</span>
          <span>Chromecast</span>
        </div>
        <div className="cabecalho__parte-inferior">
          <h1>Nest Mini</h1>
          <div>
            <button>Visão Geral</button>
            <button>Especificações técnicas</button>
            <button>Privacidade</button>
          </div>
          <button>Encontrar Varejistas</button>
        </div>
        <div></div>
      </header>
    );
  }
}

export default Cabecalho;
