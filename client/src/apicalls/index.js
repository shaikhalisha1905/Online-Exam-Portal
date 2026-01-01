import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_WEB_URL  // Using environment variable
});

// Add an interceptor to set the latest token dynamically
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
