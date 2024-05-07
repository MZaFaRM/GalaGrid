import axios from 'axios';

const api = axios.create({
  //   baseURL: 'https://webscrapper-r78p.onrender.com',
  baseURL: 'https://b778-2409-40f3-2f-4703-81b1-8483-aa5f-c1b8.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };

