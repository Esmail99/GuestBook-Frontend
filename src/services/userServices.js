import axios from "axios";

export const registerUser = (data) => {
  console.log(data);
  return axios.post(
    "https://cryptic-meadow-98283.herokuapp.com/api/users/register",
    data
  );
};

export const loginUser = (data) => {
  return axios.post(
    "https://cryptic-meadow-98283.herokuapp.com/api/users/login",
    data
  );
};
