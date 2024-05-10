import axios from 'axios';

const api = axios.create({
  //   baseURL: 'https://webscrapper-r78p.onrender.com',
  baseURL: 'https://6de6-2405-201-f021-1039-8910-4c19-a9a4-43fb.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };

