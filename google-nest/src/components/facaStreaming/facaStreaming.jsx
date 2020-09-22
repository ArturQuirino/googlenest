import React, { Component } from 'react';
import './facaStreaming.css';

function mudarOpacidadeEPosicaoNoScroll() {
  var element = document.querySelector(
    '.faca-streaming__container-maior-parte1'
  );

  function mudarOpacidade() {
    const rect = element.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top < window.innerHeight && rect.top > 0) {
      document.documentElement.style.setProperty('--str-cat1-opacity', '1');
      document.documentElement.style.setProperty('--str-cat2-opacity', '0');

      document.documentElement.style.setProperty('--str-cat1-y', '0px');
      document.documentElement.style.setProperty('--str-cat2-y', '10px');
    } else if (rect.top < 0) {
      document.documentElement.style.setProperty(
        '--str-cat1-opacity',
        (window.innerHeight + rect.top) / window.innerHeight
      );

      document.documentElement.style.setProperty(
        '--str-cat1-y',
        -100 +
          (100 * (window.innerHeight + rect.top)) / window.innerHeight +
          'px'
      );
    } else {
      document.documentElement.style.setProperty('--str-cat1-opacity', '0');
      document.documentElement.style.setProperty('--str-cat2-opacity', '0');

      document.documentElement.style.setProperty('--str-cat1-y', '0px');
      document.documentElement.style.setProperty('--str-cat2-y', '0px');
    }

    if (rect.top < 0 - window.innerHeight / 2) {
      document.documentElement.style.setProperty(
        '--str-cat2-opacity',
        0.5 - (window.innerHeight + rect.top) / window.innerHeight
      );

      document.documentElement.style.setProperty(
        '--str-cat2-y',
        (10 * (window.innerHeight + rect.top)) / window.innerHeight + 'px'
      );
    }
  }

  window.addEventListener('load', mudarOpacidade);
  window.addEventListener('scroll', mudarOpacidade);
}

class FacaStreaming extends Component {
  componentDidMount() {
    mudarOpacidadeEPosicaoNoScroll();
  }
  render() {
    return (
      <section className="faca-streaming">
        <div className="faca-streaming__container-maior-parte1">
          <div className="faca-streaming__container-parte1">
            <div>
              <span>Faça streaming de</span>
            </div>
            <div className="faca-streaming__container-musicas-noticias">
              <div className="faca-streaming__texto-musicas">músicas.</div>
              <div className="faca-streaming__texto-noticias">notícias.</div>
            </div>
          </div>
          <div style={{ height: '150vh' }}></div>
        </div>

        <div className="faca-streaming__container-parte2">TESTE</div>
        <div className="faca-streaming__container-parte3">TESTE</div>
      </section>
    );
  }
}

export default FacaStreaming;
