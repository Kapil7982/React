
const BASE_URL = 'https://reqres.in/api';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      return data.token;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};
