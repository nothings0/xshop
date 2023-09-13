import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://backend-md7c.onrender.com/api",
});
const axiosPrimary = axios.create({
  baseURL: "https://backend-md7c.onrender.com/api",
});
export { axiosPrimary };
export default axiosClient;
