import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://simple-blog-api.crew.red",
  withCredentials: true,
});

export default instance;
