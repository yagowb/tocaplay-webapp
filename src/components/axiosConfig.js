import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',

  // outras configurações do axios, se necessário
});

export default instance;
