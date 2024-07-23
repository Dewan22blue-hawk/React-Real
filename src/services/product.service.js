import axios from "axios";
// tambahkan sebuah parameter callback
export const getProducts = (callback) => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
      // return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getDetailProduct = (id, callback) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response.data);
      // return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
