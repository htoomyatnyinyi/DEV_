import axios from "axios";

const url = `http://localhost:8080/upload`;

export const postFileUpload = (action) => {
  console.log("ACTION BEFORE POST", action);

  axios.request({
    method: "post",
    url,
    data: {
      action,
    },
  });
};
