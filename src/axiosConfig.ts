import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Base URL para todas as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
