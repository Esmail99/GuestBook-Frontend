import axios from "axios";
import { getStorage } from "./localStorageManager";

const putService = async (route, data) => {
  const userInfo = await getStorage("userInfo");
  const userToken = userInfo.token;
  const headers = {
    "Content-Type": "application/json",
    "user-token": `${userToken}`,
  };
  return await axios.put(
    `https://cryptic-meadow-98283.herokuapp.com${route}`,
    data,
    { headers: headers }
  );
};

export default putService;
