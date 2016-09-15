import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="schedule">
          <div className="elem">
            <img src="assets/images/moto.png" />
          </div>
          <div className="elem hour">
            <p>Lunes y Martes: 12:00 PM - 9 PM</p>
            <p>Miércoles: 12:00 PM - 1 AM</p>
            <p>Jueves y Viernes: 12:00 PM - 3 AM</p>
            <p>Sábado: 10:00 AM - 3 AM</p>
            <p>Domingo: 10:00 AM - 10 PM</p>
          </div>
        </div>
        <div className="bars">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
        </div>
        <div className="by-mellow">
          <p>Made by Mellow C&C // mellow.cc</p>
        </div>
      </footer>
    );
  }
}
