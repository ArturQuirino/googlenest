import React, { Component } from 'react';
import './comandoDeVoz.css';

function mudarOpacidadeNoScroll() {
  const element = document.querySelector('.comando-de-voz');

  function mudarOpacidade() {
    const rect = element.getBoundingClientRect();
    if (
      rect.top <= 0.5 * window.innerHeight &&
      rect.top > -0.3 * window.innerHeight
    ) {
      element.classList.add('in-viewport');
    } else {
      element.classList.remove('in-viewport');
    }
    console.log(rect.bottom);
    if (rect.top < -0.3 * window.innerHeight) {
      element.classList.add('in-viewport2');
    } else {
      element.classList.remove('in-viewport2');
    }
  }

  window.addEventListener('load', mudarOpacidade);
  window.addEventListener('scroll', mudarOpacidade);
}

class ComandoDeVoz extends Component {
  componentDidMount() {
    mudarOpacidadeNoScroll();
  }
  render() {
    return (
      <section className="comando-de-voz">
        <div className="comando-de-voz__container-principal">
          <div className="comando-de-voz__fundo"></div>
          <div className="comando-de-voz__tv-ligada"></div>
          <div className="comando-de-voz__tv-desligada"></div>
          <div className="comando-de-voz__texto-diminua-as-luzes">
            <span className="comando-de-voz__texto-diminua-as-luzes__texto1">
              "Ok
            </span>
            <span className="comando-de-voz__texto-diminua-as-luzes__texto2">
              {' '}
              Google,
            </span>
            <span className="comando-de-voz__texto-diminua-as-luzes__texto3">
              {' '}
              diminua
            </span>
            <span className="comando-de-voz__texto-diminua-as-luzes__texto4">
              {' '}
              as
            </span>
            <span className="comando-de-voz__texto-diminua-as-luzes__texto5">
              {' '}
              luzes"
            </span>
          </div>
          <div className="comando-de-voz__texto-ligue-a-tv">
            <span className="comando-de-voz__texto-ligue-a-tv__texto1">
              "Ok
            </span>
            <span className="comando-de-voz__texto-ligue-a-tv__texto2">
              {' '}
              Google,{' '}
            </span>
            <span className="comando-de-voz__texto-ligue-a-tv__texto3">
              {' '}
              ligue{' '}
            </span>
            <span className="comando-de-voz__texto-ligue-a-tv__texto4">
              {' '}
              a{' '}
            </span>
            <span className="comando-de-voz__texto-ligue-a-tv__texto5">
              {' '}
              TV"
            </span>
          </div>
        </div>
        <div className="comando-de-voz__espaco-rolagem"></div>
      </section>
    );
  }
}

export default ComandoDeVoz;
