import axios from "axios";
import { API_BASE_URL } from "../configs/api.config";

export const regNewUser = async (userData) => {
  const { data } = await axios.post(`${API_BASE_URL}/users/signup`, userData);
  console.log(data);
  return data;
};

export const loginUser = async (userData) => {
  const { data } = await axios.post(`${API_BASE_URL}/users/login`, userData);
  console.log(data);
  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post(`${API_BASE_URL}/users/logout`);
  return data;
};

export const getUserInfo = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/users/current`);
  return data;
};

export const getData = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/contacts`);
  console.log(data);
  return data;
};
export const postData = async (contact) => {
  const { data } = await axios.post(`${API_BASE_URL}/contacts`, contact);
  return data;
};

export const deleteData = async (id) => {
  const { data } = await axios.delete(`${API_BASE_URL}/contacts/${id}`);
  return data;
};

export const UpdateData = async (id) => {
  const { data } = await axios.patch(`${API_BASE_URL}/contacts/${id}`);
  return data;
};
