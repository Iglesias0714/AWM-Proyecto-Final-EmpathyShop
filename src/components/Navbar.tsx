// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asegúrate de que tienes un logo en la ruta correcta

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="Logo de la empresa" style={styles.logo} />
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/products" style={styles.link}>Products</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#e0e0e0',
  },
  logo: {
    height: '50px', // Ajusta el tamaño según sea necesario
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: 'black',
  },
};

export default Navbar;
