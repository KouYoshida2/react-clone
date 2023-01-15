import axios, { AxiosInstance } from "axios";
import { worker } from "../../mocks/browser";

if (import.meta.env.DEV) {
  worker.start({
    // モックしていない通信のwarningを消す
    onUnhandledRequest: "bypass",
  });
}

const repository: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default repository;
