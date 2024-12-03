import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cmexback-willy3087-williams-projects-2c392421.vercel.app", // Base URL para todas as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
