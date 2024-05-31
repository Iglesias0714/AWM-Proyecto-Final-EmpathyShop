import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div style={styles.welcomeContainer}>
      <h2>Bienvenido a EmpathyShop</h2>
      <p>Descubre una amplia gama de productos diseñados para personas con discapacidad.</p>
      <Link to="/productos" style={styles.viewProductsButton}>Ver más productos</Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  welcomeContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  viewProductsButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    marginTop: '20px',
  },
};

export default WelcomePage;
