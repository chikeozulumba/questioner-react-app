import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://questioner-andela.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.Authorization = localStorage.getItem('qa-token');

export default Axios;
