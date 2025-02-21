import axios from "axios";
// config

const BASE_URL = "https://chati-backend-production-2290.up.railway.app";
// const BASE_URL = 'http://localhost:8000';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
export { BASE_URL };