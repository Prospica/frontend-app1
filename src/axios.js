import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/', // Localhost Endpoint
    //baseURL: 'https://backend-secondhand-production.up.railway.app/api/', // Localhost Endpoint
    //baseURL: 'https://secondhand3.herokuapp.com/api/', // Heroku Endpoint
    validateStatus: () => true
})