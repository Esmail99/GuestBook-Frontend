import axios from "axios";

export const registerUser = (data) => {
  return axios.post(
    "https://cryptic-meadow-98283.herokuapp.com/api/users/register",
    data
  );
};
