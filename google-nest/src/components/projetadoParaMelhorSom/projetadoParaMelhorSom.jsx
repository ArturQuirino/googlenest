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

      document.documentElement.style.setProperty(
        '--db-title-y',
        ((window.innerHeight - rect.top) * 100) / window.innerHeight + 'px'
      );
    }
  }

  window.addEventListener('load', mudarOpacidade);
  window.addEventListener('scroll', mudarOpacidade);
}

function mudarCorteNoScroll(classeElemento) {
  var element = document.querySelector(classeElemento);

  function mudarcorte() {
    const rect = element.getBoundingClientRect();
    if (rect.top < 0) {
      document.documentElement.style.setProperty('--clip1', '0%');
    } else if (rect.top > window.innerHeight) {
      document.documentElement.style.setProperty('--clip1', '100%');
    } else {
      document.documentElement.style.setProperty(
        '--clip1',
        100 - ((window.innerHeight - rect.top) * 100) / window.innerHeight + '%'
      );
    }
  }

  window.addEventListener('load', mudarcorte);
  window.addEventListener('scroll', mudarcorte);
}

class ProjetadoParaMelhorSom extends Component {
  componentDidMount() {
    mudarOpacidadeNoScroll('.projetado-para-melhorar-som__titulo');
    mudarCorteNoScroll('.projetado-para-melhorar-som__container2-imagem2');
  }
  render() {
    return (
      <div className="projetado-para-melhorar-som">
        <div className="projetado-para-melhorar-som__container-todo-titulo">
          <div className="projetado-para-melhorar-som__titulo">
            <span>
              Projetado para ter o melhor som.
              <br />
              Design que combina com sua casa.
            </span>
          </div>
        </div>
        <div className="projetado-para-melhorar-som__container-todas-imagens">
          <div className="projetado-para-melhorar-som__container1-imagem">
            <div className="projetado-para-melhorar-som__container2-imagem">
              <div className="projetado-para-melhorar-som__container-imagem">
                <div className="projetado-para-melhorar-som__imagem-externa"></div>
              </div>
            </div>

            <div className="projetado-para-melhorar-som__container2-imagem2">
              <div className="projetado-para-melhorar-som__container-imagem">
                <div className="projetado-para-melhorar-som__imagem-interna"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjetadoParaMelhorSom;
