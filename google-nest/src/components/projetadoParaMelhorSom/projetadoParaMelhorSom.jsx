import React, { Component } from 'react';
import './projetadoParaMelhorSom.css';

function mudarOpacidadeNoScroll(classeElemento) {
  var element = document.querySelector(classeElemento);

  function mudarOpacidade() {
    const rect = element.getBoundingClientRect();
    if (rect.top < 0) {
      element.style.opacity = 1;
    } else if (rect.top > window.innerHeight) {
      element.style.opacity = 0;
    } else {
      element.style.opacity =
        (window.innerHeight - rect.top) / window.innerHeight;
    }
  }

  window.addEventListener('load', mudarOpacidade);
  window.addEventListener('scroll', mudarOpacidade);
}

class ProjetadoParaMelhorSom extends Component {
  componentDidMount() {
    mudarOpacidadeNoScroll('.projetado-para-melhorar-som__titulo');
  }
  render() {
    return (
      <div className="projetado-para-melhorar-som">
        <span className="projetado-para-melhorar-som__titulo">
          Projetado para ter o melhor som.
          <br />
          Design que combina com sua casa.
        </span>
      </div>
    );
  }
}

export default ProjetadoParaMelhorSom;
