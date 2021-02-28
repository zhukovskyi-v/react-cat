import axios from 'axios'
const API = `d30e9655-d5b7-413a-a45e-bfa6e6fafe25`;

export const axiosInstance = axios.create({
    baseURL: `https://api.thecatapi.com/`
});
