import axios from "axios";

const api = axios.create({
  baseURL:
    "https://rental-backend-naf0.onrender.com"
});

export default api;