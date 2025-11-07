import axios from "axios";

const axiosInstanceAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default axiosInstanceAPI;