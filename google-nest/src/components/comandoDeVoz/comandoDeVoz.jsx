import React, { Component } from 'react';
import './comandoDeVoz.css';

function mudarOpacidadeNoScroll() {
  const element = document.querySelector('.comando-de-voz');

  function mudarOpacidade() {
    const rect = element.getBoundingClientRect();
    if (rect.bottom <= 1.2 * window.innerHeight) {
      element.classList.add('in-viewport');
    } else {
      element.classList.remove('in-viewport');
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
        <div className="comando-de-voz__tv-ligada"></div>
        <div className="comando-de-voz__tv-desligada"></div>
        <div className="comando-de-voz__texto-diminua-as-luzes">
          "Ok Google, diminua as luzes"
        </div>
      </section>
    );
  }
}

export default ComandoDeVoz;
