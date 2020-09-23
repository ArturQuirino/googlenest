import React, { Component } from 'react';
import './comandoDeVoz.css';

class ComandoDeVoz extends Component {
  render() {
    return (
      <section className="comando-de-voz">
        <div className="comando-de-voz__tv-ligada"></div>
        <div className="comando-de-voz__tv-desligada"></div>
        <div>Teste</div>
      </section>
    );
  }
}

export default ComandoDeVoz;
