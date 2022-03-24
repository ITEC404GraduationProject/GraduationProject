import axios from 'axios';

export const API_URL = `https://localhost:7039/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

// Template of how to access backend endpoints

// $api.get(`/student`, {withCredentials: true})
// $api.post('/student', {Name: "1", Surname: "1", Password: "Password"}, {withCredentials: true})
// $api.put('/student/623c6ac97f092fef8702abdc', {Name: "Name", Surname: "Surname", Password: "Password"})
// $api.delete('/student/623c6a02893457e621990033')


$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('NOT AUTHORIZED')
        }
    }
    throw error;
})

export default $api;
