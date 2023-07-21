import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './styles.css';
import brand from '../../melogo.jpg';
import { Link } from 'react-router-dom';

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
                <Link to="/">Inicio</Link>
              </li>
              <li className="products-item">
                <Link to="/productos">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contacto</Link>
              </li>
            </ul>
          </nav>

          {/* logo de la marca */}
          <div  className="logo-container">
            <Link to="/"><img  src={brand} alt="logo" className='logo-melogo' /></Link>
          </div>

          {/* cart widget */}
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
