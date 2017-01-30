import ScrollReveal from 'scrollreveal';
import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import $ from 'jquery';
import Slider from 'react-slick';

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

const slideSettings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const logos = [
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
    },
    {
      image: 'Pulso_Gris.png',
      url: 'http://pulsosocial.com/2016/09/09/royal-app-on-demand-licor-domicilio-ciudad-de-mexico/'
    }
  ],
  [
    {
      image: 'Xataka_Gris.png',
      url: 'http://m.xataka.com.mx/aplicaciones-para-smartphones/alcohol-a-domicilio-royal-es-la-solucion-a-tus-problemas-en-ciudad-de-mexico'
    },
    {
      image: 'B_M_Gris.png',
      url: 'http://www.businessandmarketingtodaynews.com/socialmedia-12/'
    },
    {
      image: 'Milenio_Gris.png',
      url: 'http://www.milenio.com/negocios/emprendedores/royal_app-royal-alcohol_domicilio-app_venta_alcohol-fiesta_domicilio-app-milenio_0_814118763.html'
    },
    {
      image: 'Reforma_Gris.png',
      url: 'http://busquedas.gruporeforma.com/reforma/Libre/VisorNota.aspx?id=2004493%7CArticulosCMS&md5=227b573c371932f03e2f0fce17b9dd3c'
    }
  ],
  [
    {
      image: 'Miambiente_Gris.png',
      url: 'http://www.miambiente.com.mx/general/llega-la-app-royal-de-delivery-de-alcohol-a-domicilio'
    },
    {
      image: 'Funners_Gris.png',
      url: 'http://wearefunners.com/2016/09/09/las-5-mejores-apps-para-pedir-alcohol-domicilio/'
    },
    {
      image: 'Sanluis_Gris.png',
      url: 'http://www.sanluisencontacto.com/noticias/ya-en-mexico-alcohol-a-domicilio-con-royal/'
    },
    {
      image: 'Bienhecho_Gris.png',
      url: 'http://www.bienhecho.com.mx/entretenimiento/alcohol-a-domicilio-royal-es-la-solucion-a-tus-problemas-en-ciudad-de-mexico/'
    }
  ],
  [
    {
      image: 'Mural_Gris.png',
      url: 'http://www.mural.com/aplicacioneslibre/preacceso/articulo/default.aspx?id=940210&fuente=md&urlredirect=http://www.mural.com/aplicaciones/articulo/default.aspx?Id=940210&Fuente=MD'
    },
    {
      image: 'Appicker_Gris.png',
      url: 'http://www.apppicker.com/apps/1082398154/royal--licorera-a-domicilio'
    }
  ]
];

export class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    const other = {
      delay    : 200,
      distance : '90px',
      easing   : 'ease-in-out',
      rotate   : { z: 10 },
      scale    : 1.1
    };
    window.sr = ScrollReveal();
    sr.reveal('.description', { duration: 1000 }, 50);
    sr.reveal('.feature-image', other);
    sr.reveal('.logos', { duration: 1000 }, 50);
    sr.reveal('.logo1', { duration: 2000 }, 50);
  }

  render() {
    let links = logos.map((row, rowKey) => {
      let renderedLogos = row.map((logo, key) => {
        return (<a href={logo.url} target="_blank" key={key}>
            <img src={`assets/images/${logo.image}`} className="logo1" />
          </a>);
      });
      return <div key={rowKey}>{renderedLogos}</div>;
    });
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

          </div>
          <div className="feature">
            <div className="feature-image">
              <img src="assets/images/feature2.jpg" />
            </div>

          </div>
          <div className="feature">
            <div className="feature-image">
              <img src="assets/images/feature3.jpg" />
            </div>

          </div>
        </section>

        <section className="logos logos-gray">
          <Slider {...slideSettings}>
            {links}
          </Slider>
        </section>
        <Footer/>
      </div>
    );
  }
}
