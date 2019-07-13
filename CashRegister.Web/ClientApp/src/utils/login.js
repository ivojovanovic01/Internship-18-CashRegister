import axios from "axios";

export const getCashierByUsernameAndPassword = (username, password) => {
  return axios
    .get("/api/cashiers/get-by-username-and-password", {
      params: {
        username,
        password
      }
    })
    .then(response => response.data);
};
