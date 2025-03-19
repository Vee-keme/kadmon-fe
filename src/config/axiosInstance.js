import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:7001/api/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});
