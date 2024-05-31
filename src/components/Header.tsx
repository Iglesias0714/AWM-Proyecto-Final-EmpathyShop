// src/components/Header.tsx
import React from 'react';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="EmpatyShop Logo" style={styles.logo} />
          <h1 style={styles.title}>EmpatyShop</h1>
        </div>
        <input type="text" placeholder="Buscar productos..." style={styles.searchBar} />
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#inicio" style={styles.navLink}>Inicio</a></li>
            <li style={styles.navItem}><a href="#ofertas" style={styles.navLink}>Ofertas</a></li>
            <li style={styles.navItem}><a href="#favoritos" style={styles.navLink}>Favoritos</a></li>
            <li style={styles.navItem}><a href="#mi-cuenta" style={styles.navLink}>Mi cuenta</a></li>
            <li style={styles.navItem}><a href="#mi-carrito" style={styles.navLink}>Mi carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    padding: '20px',
    backgroundColor: '#f7fade',
    borderBottom: '1px solid #ccc',
    textAlign: 'center'
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
  logo: {
    width: '50px', // Ajusta el tamaño según sea necesario
    height: '50px',
    borderRadius: '50%'
  },
  title: {
    fontSize: '2rem',
    margin: '10px 0'
  },
  searchBar: {
    padding: '10px',
    width: '50%',
    margin: '20px 0',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
  }
};

export default Header;