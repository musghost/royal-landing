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
            <p>Lunes y Martes: 9am-7pm</p>
            <p>Miércoles a Sábado: 9am-3am</p>
            <p>Domingo: 10am-7pm</p>
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
