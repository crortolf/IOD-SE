const axios = require("axios");

const fetchItems = (req, res) => {
  axios.get("https://fakestoreapi.com/products").then((result) => {
    res.json(result.data);
  });
};

module.exports = { fetchItems };
