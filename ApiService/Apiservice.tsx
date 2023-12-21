import axios from 'axios';

export const UserData = async () => {
  try {
    const response = await axios.request({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: 'get',
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};