import axios from "axios";
import { getEnvVariables } from "";

const conexionApi = axios.create({
    baseURL: VITE_API_URL
});

const login = async (emal, pass) => {
    try {
        const { data } = await conexionApi.post('/api/auth/login', { email, password });
        return data;
    } catch (error) {
        console.log(error);
    }
}

