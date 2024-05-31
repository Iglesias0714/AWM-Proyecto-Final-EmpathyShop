// src/pages/AddProduct.tsx
import React, { useState, CSSProperties } from 'react';
import { postData } from '../services/api';

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const product = { name, price, description };

    try {
      const result = await postData(product);
      setSuccess(result.success);
    } catch (error) {
      console.error('Error al añadir producto:', error);
      setSuccess(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Añadir Producto</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
        </label>
        <label style={styles.label}>
          Precio:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} style={styles.input} />
        </label>
        <label style={styles.label}>
          Descripción:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Añadir</button>
      </form>
      {success !== null && (
        <p style={styles.message}>{success ? 'Producto añadido con éxito!' : 'Error al añadir producto.'}</p>
      )}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    margin: '0.5rem 0',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginBottom: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
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
  message: {
    marginTop: '1rem',
    fontSize: '1rem',
  },
};

export default AddProduct;
