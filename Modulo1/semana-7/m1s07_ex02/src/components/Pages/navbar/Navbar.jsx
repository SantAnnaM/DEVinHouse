import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">Sobre</a>
      <a href="/portfolio" className="navbar-item">Cardápio</a>
      <a href="/shop" className="navbar-item">Bebidas</a>
      <a href="/blog" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contato</a>
  </section>
  )

}

export default Navbar;