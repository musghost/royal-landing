import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <section className="description">
          <div className="dot"></div>
          <h3>Licorería<br/>a domicilio</h3>
          <h4>
            <span>- Ciudad de México y zona metropolitana -</span>
          </h4>
          <p>
            <strong>Royal es una plataforma de alcohol “ON-demand” que ofrece una experiencia<br />premium para la compra de bebidas y complementos a domicilio.</strong>
          </p>
          <p>¡Pedidos a la puerta de tu casa de forma rápida y segura! ¿Qué esperas?</p>
          <div className="dot"></div>
        </section>
        <section className="banners">
          <div className="banner banner-left">
            <div>
              <h2>Nuestro Blog</h2>
              <a href="#" target="_blank">Entra</a>
            </div>
          </div>
          <div className="banner banner-right">
            <div>
              <h2>Vende con<br/>nosotros</h2>
              <a href="#" target="_blank">Contacto</a>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <div className="feature-image">
              <img src="assets/images/feature1.jpg" />
            </div>
            <img src="assets/images/feature1.png" />
          </div>
          <div className="feature">
            <div className="feature-image">
              <img src="assets/images/feature2.jpg" />
            </div>
            <img src="assets/images/feature2.png" />
          </div>
          <div className="feature">
            <div className="feature-image">
              <img src="assets/images/feature3.jpg" />
            </div>
            <img src="assets/images/feature3.png" />
          </div>
        </section>
        <section className="logos">
          <div>
            <a href="#" target="_blank">
              <img src="assets/images/allgo.png" />
            </a>
            <a href="#" target="_blank">
              <img src="assets/images/noja.png" />
            </a>
            <a href="#" target="_blank">
              <img src="assets/images/ocesa.png" />
            </a>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
