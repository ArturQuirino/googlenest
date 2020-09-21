import React from 'react';
import { Component } from 'react';
import './conhecaONovo.css';
import { isPartOfElementInViewport } from '../../shared/utils';

function adicionarClasseNoScroll(classeElemento) {
  var element = document.querySelector(classeElemento);
  function addClassOnScroll() {
    debugger;
    if (isPartOfElementInViewport(element)) {
      element.classList.add('in-viewport');
    } else {
      element.classList.remove('in-viewport');
    }
  }

  window.addEventListener('load', addClassOnScroll);
  window.addEventListener('scroll', addClassOnScroll);
}

class ConhecaONovoa extends Component {
  componentDidMount() {
    adicionarClasseNoScroll('.conheca-o-novo__descricao');
    adicionarClasseNoScroll('.conheca-o-novo__video');
  }

  render() {
    return (
      <section className="conheca-o-novo">
        <video
          playsInline
          className="conheca-o-novo__video"
          muted
          loop
          autoPlay
        >
          <source
            type="video/mp4"
            src="https://storage.googleapis.com/mannequin/blobs/8f3dfe1c9c4f953c8987087f055e2ac8.mp4"
          />
        </video>
        <div className="conheca-o-novo__container-descricao">
          <span className="conheca-o-novo__descricao">
            Conheça o novo Google Nest Mini. Suas músicas vão ficar ainda
            melhores. E o Google Assistente será de grande ajuda em casa.
          </span>
        </div>
      </section>
    );
  }
}

export default ConhecaONovoa;
