import axios from "axios";
const API = axios.create({
  baseURL: "http://192.168.1.12:5000/api/student",
  headers: {
    "Content-Type": "application/json",
  },
});
export default API;