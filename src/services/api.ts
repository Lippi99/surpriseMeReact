import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7272/v1",
  withCredentials: true,
});
