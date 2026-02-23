import axios from "axios";

const API = axios.create({
  baseURL: "https://real-backend-p7ph.onrender.com/api",
});

export default API;
