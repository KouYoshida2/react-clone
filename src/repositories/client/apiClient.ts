import axios, { AxiosInstance } from "axios";

const repository: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default repository;
