import axios from "axios";
import { getStorage } from "./localStorageManager";

const getRequestHeaders = () => {
  const userInfo = getStorage("userInfo");
  const userToken = userInfo.token;
  const headers = {
    "Content-Type": "application/json",
    "user-token": `${userToken}`,
  };
  return headers;
};

export const getService = (route) => {
  const headers = getRequestHeaders();
  return axios.get(`https://cryptic-meadow-98283.herokuapp.com${route}`, {
    headers,
  });
};

export const postService = async (route, data) => {
  const headers = getRequestHeaders();
  return await axios.post(
    `https://cryptic-meadow-98283.herokuapp.com${route}`,
    data,
    { headers: headers }
  );
};

export const putService = async (route, data) => {
  const headers = getRequestHeaders();
  return await axios.put(
    `https://cryptic-meadow-98283.herokuapp.com${route}`,
    data,
    { headers: headers }
  );
};

export const deleteService = (route) => {
  const headers = getRequestHeaders();
  return axios.delete(`https://cryptic-meadow-98283.herokuapp.com${route}`, {
    headers,
  });
};
