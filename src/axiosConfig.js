import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',

  // Outras configurações do Axios, se necessário
});

export default instance;
