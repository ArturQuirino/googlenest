import React, { Component } from 'react';
import './pequenoPoderoso.css';

class PequenoPoderoso extends Component {
  render() {
    return (
      <section className="pequeno-poderoso">
        <span className="pequeno-poderoso__titulo">
          Google Nest Mini.
          <br />
          Pequeno e poderoso.
        </span>
        <button className="pequeno-poderoso__botao">
          Encontrar varejistas
        </button>
        <video autoPlay playsInline className="pequeno-poderoso__video" muted>
          <source
            type="video/mp4"
            src="https://storage.googleapis.com/mannequin/blobs/5306eb0fb216450c8c601a385a23e7b3.mp4"
          />
        </video>
      </section>
    );
  }
}

export default PequenoPoderoso;
