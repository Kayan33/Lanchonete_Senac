import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/cf6eeb3daf034612a20e54c06673c950/',
    timeout: 1000,
  });