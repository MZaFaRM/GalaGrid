import axios from 'axios';

const api = axios.create({
  //   baseURL: 'https://webscrapper-r78p.onrender.com',
  baseURL: 'https://ebb9-2405-201-f021-1039-e01a-4529-2fd1-5f7d.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };

