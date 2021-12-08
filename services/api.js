import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pet-go-app.herokuapp/',
});

export default api;