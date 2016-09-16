import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <section className='first-clase'>
        <header>
          <div className='logo'>
            <img src="assets/images/royal.png" />
          </div>
          <div className='menu'>
            <ul className="social-net">
              <li>
                <a href="https://www.facebook.com/getroyalCDMX/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/getroyalmx/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/getroyalmx" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="main-clase">
          <div className="cup">
            <img src="assets/images/coup.png" />
          </div>
          <div className="triangle">
            <img src="assets/images/triangle.png" />
          </div>
          <h2>¡Royal, tus bebidas favoritas<br/>
            en la puerta de tu casa!</h2>

          <h4>Cerveza, licores, hielos, botana y más...</h4>

          <div className="stores">
            <a className="store" href="https://itunes.apple.com/mx/app/royal-licoreria-a-domicilio/id1082398154?l=en&mt=8" target="_blank">
              <img src="assets/images/app-store-logo.png" />
            </a>
            <a className="store google" href="https://play.google.com/store/apps/details?id=cc.mellow.getroyal" target="_blank">
              <img src="assets/images/googleplay-store.png" />
            </a>
          </div>
          <div className="phone">
            <img src="assets/images/phone.png" />
          </div>
        </div>
      </section>
    );
  }
}
