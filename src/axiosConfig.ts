import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions", // Base URL para todas as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
