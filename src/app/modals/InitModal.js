import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'elemental';
import $ from 'jquery';

class InitModal extends Component {
  constructor(props) {
    super(props);
    this.handleUserCancel = this.handleUserCancel.bind(this);
  }

  handleUserCancel() {
    window.location.href = "https://google.com.mx";
  }

  componentDidMount() {
    $('body').css({
      overflow: 'hidden'
    });
  }

  render() {
    return (
      <Modal width={'small'} isOpen={this.props.isOpen} backdropClosesModal>
        <ModalBody>
          <div className="modal__ContentContainer">
            <div className="modal__HeadIconContainer">
              <img src="assets/images/icon.png"/>
            </div>
            <div className="modal__TextContainer">
              <h1>¡bienvenido!</h1>
              <div className="modal__TextBody">
                <p>Nuestro compromiso es que celebres de manera responsable, sólo confirma tu mayoria de edad y disfruta con nosotros. ¡Gracias!</p>
              </div>
              <div className="modal__TrigersContainer">
                <form>
                  <label>
                    <input onClick={this.props.onUserClose} type='radio' value='1' name='confirm'/>
                    <span></span>
                    Si
                  </label>
                  <label>
                    <input onClick={this.handleUserCancel} type='radio' value='0' name='cancel'/>
                    <span></span>
                    No
                  </label>
                </form>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default InitModal
