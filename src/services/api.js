import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });
  api.interceptors.response.use(
      (response) => response,
      null,
  );
  return api;
};

export {createAPI};
