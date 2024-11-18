import axios from 'axios';

const BASE_URL = 'http://localhost:8000/users/api/v1/';
const userApi = () => axios.create({
baseURL: BASE_URL,
});

export const createUser = async (user) => {
    try {
    const response = await userApi().post('user/', user);
    return response.data;
    } catch (error) {
    console.error(error);
    return null;
    }
    }