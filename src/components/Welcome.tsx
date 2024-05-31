// src/components/Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to EmpathyShop</h1>
      <p style={styles.subtitle}>Tu página pensada en la accesibildad.</p>
      <Link to="/products">
        <button style={styles.button}>Ver todos los productos</button>
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7fade',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '10px 0 20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Welcome;
