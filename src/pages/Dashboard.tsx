// src/pages/Dashboard.tsx
import React, { useEffect, useState, CSSProperties } from 'react';
import { fetchData } from '../services/api';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchData().then(response => setProducts(response));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.productList}>
        {products.map(product => (
          <div key={product._id} style={styles.productItem}>
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productPrice}>Price: {product.price}</p>
            <p style={styles.productDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  productList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  productItem: {
    width: '200px',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid black',  // Añadido borde negro
    textAlign: 'left',
  },
  productName: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#007bff',
    margin: '0.5rem 0',
  },
  productDescription: {
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },
};

export default Dashboard;
