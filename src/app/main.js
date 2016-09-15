import ScrollReveal from 'scrollreveal';
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

const logos = [
  [
    {
      image: 'allgo.png',
      url: 'http://allgo.mx/#/categoria/musica'
    },
    {
      image: 'noja.png',
      url: 'http://allgo.mx/#/categoria/musica'
    },
    {
      image: 'ocesa.png',
      url: 'http://www.ocesa.com.mx/'
    }
  ],
  [
    {
      image: '24horas_Gris.png',
      url: 'http://issuu.com/diario24horas/docs/24horas_edicion1280ok/19?e=4036297/38785671'
    },
    {
      image: 'Addictware_Gris.png',
      url: 'http://addictware.com.mx/software/apps/9271-alcohol-domicilio-royal-ecommerce-app'
    },
    {
      image: 'Webadictos_Gris.png',
      url: 'https://webadictos.com/2016/09/08/royal-aplicacion-licoreria-domicilio/'
    }
  ],
  [
    {
      image: 'Pulso_Gris.png',
      url: 'http://pulsosocial.com/2016/09/09/royal-app-on-demand-licor-domicilio-ciudad-de-mexico/'
    }
  ]
];

export class Main extends Component {
  componentDidMount() {
    const other = {
      delay    : 200,
      distance : '90px',
      easing   : 'ease-in-out',
      rotate   : { z: 10 },
      scale    : 1.1
    };
    window.sr = ScrollReveal();
    /*sr.reveal('.description', { duration: 1000 }, 50);
    sr.reveal('.feature-image', other);
    sr.reveal('.logos', { duration: 1000 }, 50);
    sr.reveal('.logo1', { duration: 2000 }, 50);*/
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <section className="description">
          <div>
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
          </div>
        </section>
        <section className="banners">
          <div className="banner banner-left">
            <div>
              <h2>Nuestro Blog</h2>
              <a href="http://blog.getroyal.mx" target="_blank">Entra</a>
            </div>
          </div>
          <div className="banner banner-right">
            <div>
              <h2>Vende con<br/>nosotros</h2>
              <a href="mailto:hola@getroyal.mx" target="_blank">Contacto</a>
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
            <a href="http://allgo.mx/#/categoria/musica" target="_blank">
              <img src="assets/images/allgo.png" className="logo1" />
            </a>
            <a href="#" target="_blank">
              <img src="assets/images/noja.png" className="logo1" />
            </a>
            <a href="http://www.ocesa.com.mx/" target="_blank">
              <img src="assets/images/ocesa.png" className="logo1" />
            </a>
          </div>
          <div>
            <a href="http://issuu.com/diario24horas/docs/24horas_edicion1280ok/19?e=4036297/38785671" target="_blank">
              <img src="assets/images/24horas_Gris.png" className="logo1" />
            </a>
            <a href="http://addictware.com.mx/software/apps/9271-alcohol-domicilio-royal-ecommerce-app" target="_blank">
              <img src="assets/images/Addictware_Gris.png" className="logo1" />
            </a>
            <a href="https://webadictos.com/2016/09/08/royal-aplicacion-licoreria-domicilio/" target="_blank">
              <img src="assets/images/Webadictos_Gris.png" className="logo1" />
            </a>
          </div>
          <div>
            <a href="http://pulsosocial.com/2016/09/09/royal-app-on-demand-licor-domicilio-ciudad-de-mexico/" target="_blank">
              <img src="assets/images/Pulso_Gris.png" className="logo1" />
            </a>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
