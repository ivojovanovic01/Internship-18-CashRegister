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

export const getProductTaxTypeEnumValues = () => {
  return axios
    .get("/api/products/all-tax-types")
    .then(response => response.data);
};

export const createProduct = product => {
  return axios
    .post("/api/products/add", product)
    .then(response => response.data);
};

export const isNameValid = name => {
  return name.length >= 3;
};

export const isBarcodeValid = barcode => {
  return RegExp("^[0-9]{13}$").test(barcode);
};

export const isPriceValid = price => {
  return RegExp("^[0-9]+(.[0-9]{1,2})?$").test(price);
};

export const isQuantityValid = quantity => {
  return quantity > 0 && quantity.length <= 10 && RegExp("^[0-9]*$");
};

export const isValueNumber = value => {
  return RegExp("^[0-9]*$").test(value);
};
