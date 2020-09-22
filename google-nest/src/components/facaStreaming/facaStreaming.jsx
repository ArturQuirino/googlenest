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

function adicionarClasseInViewportParte2() {
  const element = document.querySelector('.faca-streaming__container-parte2');

  function mudarOpacidadeETranslateY() {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
      element.classList.add('in-viewport');
    } else {
      element.classList.remove('in-viewport');
    }
  }

  window.addEventListener('load', mudarOpacidadeETranslateY);
  window.addEventListener('scroll', mudarOpacidadeETranslateY);
}

class FacaStreaming extends Component {
  componentDidMount() {
    mudarOpacidadeEPosicaoNoScroll();
    adicionarClasseInViewportParte2();
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

        <div className="faca-streaming__container-parte2">
          <span className="faca-streaming__parte2__titulo">
            Use a voz para acessar as músicas e os conteúdos dos seus apps
            favoritos.
          </span>
          <span className="faca-streaming__parte2__descricao">
            Basta pedir para o Google Assistente. Ou fazer streaming do seu
            smartphone para o Google Nest Mini.3
          </span>
          <button className="faca-streaming__parte2__botao">
            Veja todos os apps e parceiros
          </button>
          <div className="faca-streaming__parte2__container-parceiros">
            <div className="faca-streaming__parte2__parceiro">Youtube</div>
            <div className="faca-streaming__parte2__parceiro">Spotify</div>
            <div className="faca-streaming__parte2__parceiro">Chromecast</div>
            <div className="faca-streaming__parte2__parceiro">Play Store</div>
            <div className="faca-streaming__parte2__parceiro">Filmes</div>
            <div className="faca-streaming__parte2__parceiro">Livros</div>
            <div className="faca-streaming__parte2__parceiro">Arquivos</div>
            <div className="faca-streaming__parte2__parceiro">Coisas</div>
          </div>
        </div>
        <div className="faca-streaming__container-parte3">
          <div className="faca-streaming__container2-parte3">
            <h2 className="faca-streaming__parte3__titulo">
              Basta dizer "Ok Google..."
            </h2>
            <div className="faca-streamming__container-imagem3">
              <div className="faca-streamming__container2-imagem3">
                <div className="faca-streamming__imagem3"></div>
              </div>
            </div>
          </div>
          <div className="faca-streamming__parte3_scrollspace"></div>
        </div>
      </section>
    );
  }
}

export default FacaStreaming;
