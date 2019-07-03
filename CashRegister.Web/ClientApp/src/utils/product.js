import axios from "axios";

export const getSearchedProducts = search => {
  return axios
    .get("/api/products/search", {
      params: {
        search
      }
    })
    .then(response => response.data);
};

export const availableQuantityIncrease = selectedProduct => {
  return axios.post(
    "/api/products/increase-available-quantity",
    selectedProduct
  );
};
