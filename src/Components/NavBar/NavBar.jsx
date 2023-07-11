import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './styles.css';
import brand from '../../melogo.jpg';
const NavBar = ({ background }) => {

  //la lógica va siempre antes del return
  return (
    <>
      <header className={`header background--${background}`}>

        <div className="header-container">



          {/* links de navegación */}
          <nav>
            <ul className="nav-container">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li className="products-item">
                <a href="/">
                  Productos <span className="arrow"></span>
                </a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </nav>

          {/* logo de la marca */}
          <div className="logo-container">
            <img src={brand} alt="logo" className='logo-melogo' />
          </div>

          {/* cart widget */}
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
