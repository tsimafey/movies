import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apikey: import.meta.env.VITE_API_KEY
  }
});

export default axiosClient;