import React, {Component} from 'react';
import InitModal from './modals/InitModal.js';
import $ from 'jquery';
import cookie from 'react-cookie';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: true
    }
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    $('body').removeAttr('style');
    cookie.save('splash', true, {path: '/'});

    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };

  componentWillMount() {
    if(typeof cookie.load('splash') !== 'undefined') {
      this.setState({
        toggleModal: false
      });
    } else {
      $('body').css({
        overflow: 'hidden'
      });
    }
  }

  render() {
    return (
      <footer>
        <div className="schedule">
          <div className="elem">
            <img src="assets/images/moto.png" />
          </div>
          <div className="elem hour">
            <p>Lunes y Martes: 12:00 PM - 9:00 PM</p>
            <p>Miércoles: 12:00 PM - 1:00 AM</p>
            <p>Jueves y Viernes: 12:00 PM - 3:00 AM</p>
            <p>Sábado: 10:00 AM - 3:00 AM</p>
            <p>Domingo: 10:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="bars">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
        </div>
        <div className="terms">
            <p><a href="http://royal-api.mellow.online/terms" target="_blank">
            Terminos y Condiciones</a></p>
            <p><a href="http://royal-api.mellow.online/privacy" target="_blank">
            Aviso de privacidad</a></p>
          </div>
         <div className="by-mellow">
          <a href="http://mellow.cc" target="_blank">
             <img src="assets/images/Sellos-02.png" />
          </a>   
            <img src="assets/images/Sellos-01.png" />
         </div>
        <InitModal isOpen={this.state.toggleModal} onUserClose={this.handleToggleModal}/>
      </footer>
    );
  }
}
