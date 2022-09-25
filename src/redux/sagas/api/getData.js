import axios from "axios";

const url = `http://localhost:8080`;

export const requestGetData = () => {
  return axios.request({
    method: "get",
    url,
  });
};
