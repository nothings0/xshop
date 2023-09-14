import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://backend-md7c.onrender.com/api",
  // baseURL: "https://backend-md7c.onrender.com/api",
});
const axiosPrimary = axios.create({
  // baseURL: "https://backend-md7c.onrender.com/api",
  baseURL: "https://backend-md7c.onrender.com/api",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
export { axiosPrimary };
export default axiosClient;
