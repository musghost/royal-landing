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
            <ul>
              <li>
                <a href="#">Royal para negocios</a>
              </li>
              <li>
                <a href="#" className='start'>Entrar</a>
              </li>
            </ul> 
          </div>
        </header>
      </section>
    );
  }
}
