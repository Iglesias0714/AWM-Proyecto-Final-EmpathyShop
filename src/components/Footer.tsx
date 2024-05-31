import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; EmpatyShop. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    padding: '20px',
    backgroundColor: '#f7fade',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
    fontSize: '0.9rem'
  }
};

export default Footer;
