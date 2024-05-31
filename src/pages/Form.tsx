// src/pages/Form.tsx
import React, { useState } from 'react';
import { postData } from '../services/api';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await postData({ name });
    setSuccess(result.success);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {success !== null && (
        <p>{success ? 'Data submitted successfully!' : 'Failed to submit data.'}</p>
      )}
    </div>
  );
};

export default Form;
