import axios from "axios";

const baseUrl = "https://jp-dev.cityremit.global/web-api/";

export const AxiosInstancePublic = axios.create({
  baseURL: baseUrl,
});

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
});
