import axios from 'axios';

const BASE_URL = 'http://localhost:8000/ecomerce/api/v1/ecomerce/';
const userApi = () => axios.create({
baseURL: BASE_URL,
});

export const registerUser = async (user) => {
    try {
    const response = await userApi().post('', user);
    return response.data;
    } catch (error) {
    console.error(error);
    return null;
    }
    }

    export const getUser = async (user) => {
        try {
        const response = await userApi().get('', user);
        return response.data;
        } catch (error) {
        console.error(error);
        return null;
        }
        }