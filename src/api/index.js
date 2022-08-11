import axios from "axios";
import { API_BASE_URL } from "../configs/api.config";

axios.defaults.baseURL = API_BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
