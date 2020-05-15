import axios from "axios";
import { getStorage } from "./localStorageManager";

const deleteService = (route) => {
  const userInfo = getStorage("userInfo");
  const userToken = userInfo.token;
  const headers = {
    "Content-Type": "application/json",
    "user-token": `${userToken}`,
  };
  return axios.delete(`https://cryptic-meadow-98283.herokuapp.com${route}`, {
    headers,
  });
};

export default deleteService;
