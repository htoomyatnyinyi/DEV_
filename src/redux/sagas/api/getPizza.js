import axios from "axios";

const url = `http://localhost:8080/menu`;

export const requestPizza = () => {
  return axios.request({
    method: "get",
    url,
  });
};
