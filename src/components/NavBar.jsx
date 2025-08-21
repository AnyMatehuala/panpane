import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f1e4' }}>
      <div>
        <h2>Panpané</h2>
      </div>
      <div>
        <a href="#">Inicio</a> | <a href="#">Productos</a> | <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;