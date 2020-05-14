import axios from "axios";

const postService = (data) => {
  return axios.post(
    "https://cryptic-meadow-98283.herokuapp.com/api/users/register",
    data
  );
};

export default postService;
