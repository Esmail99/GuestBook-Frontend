import axios from "axios";

export const userServices = (route, data) => {
  return axios.post(`https://cryptic-meadow-98283.herokuapp.com${route}`, data);
};

export default userServices;
