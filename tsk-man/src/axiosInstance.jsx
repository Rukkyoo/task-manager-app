import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://task-manager-app-u8rz.onrender.com/api/v1', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
