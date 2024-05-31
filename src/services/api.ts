// src/services/api.ts
const API_URL = 'http://localhost:5000/api/products';

export const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const postData = async (data: any) => {
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al añadir producto');
  }

  return await response.json();
};

export const deleteData = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al eliminar producto');
  }

  return await response.json();
};
